import { useState, useRef } from 'react';
import { Upload, X, Camera, AlertCircle } from 'lucide-react';

interface ImageUploadProps {
    currentImage?: string;
    onImageChange: (imageData: string) => void;
    className?: string;
}

export default function ImageUpload({ currentImage, onImageChange, className = '' }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (file: File) => {
        setError(null);
        setIsLoading(true);

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('Please select an image file (JPG, PNG, etc.)');
            setIsLoading(false);
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError('Image is too large. Maximum size is 5MB.');
            setIsLoading(false);
            return;
        }

        try {
            // Resize image before converting to base64
            const resizedImage = await resizeImage(file, 1200, 800);
            setPreview(resizedImage);
            onImageChange(resizedImage);
        } catch (err) {
            setError('Failed to process image. Please try again.');
            console.error('Image processing error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let { width, height } = img;

                    // Calculate new dimensions
                    if (width > maxWidth || height > maxHeight) {
                        const ratio = Math.min(maxWidth / width, maxHeight / height);
                        width = Math.round(width * ratio);
                        height = Math.round(height * ratio);
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error('Could not get canvas context'));
                        return;
                    }

                    ctx.drawImage(img, 0, 0, width, height);

                    // Convert to base64 with compression
                    const base64 = canvas.toDataURL('image/jpeg', 0.8);
                    resolve(base64);
                };
                img.onerror = () => reject(new Error('Failed to load image'));
                img.src = e.target?.result as string;
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(file);
        });
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        onImageChange('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={className}>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
            />

            {preview ? (
                // Image Preview
                <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors group">
                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                type="button"
                                onClick={openFilePicker}
                                className="p-3 bg-white rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
                                title="Change image"
                            >
                                <Camera className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                type="button"
                                onClick={handleRemove}
                                className="p-3 bg-red-500 rounded-xl shadow-lg hover:bg-red-600 transition-colors"
                                title="Remove image"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                    {/* Mobile-friendly buttons */}
                    <div className="absolute bottom-3 right-3 flex gap-2 sm:hidden">
                        <button
                            type="button"
                            onClick={openFilePicker}
                            className="p-2.5 bg-white rounded-lg shadow-lg"
                        >
                            <Camera className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="p-2.5 bg-red-500 rounded-lg shadow-lg"
                        >
                            <X className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            ) : (
                // Upload Area
                <div
                    onClick={openFilePicker}
                    onDrop={handleDrop}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    className={`
                        relative border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all
                        ${isDragging
                            ? 'border-[#FFD100] bg-[#FFD100]/5'
                            : 'border-gray-300 hover:border-[#FFD100] hover:bg-gray-50'
                        }
                        ${isLoading ? 'opacity-50 pointer-events-none' : ''}
                    `}
                >
                    {isLoading ? (
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 border-3 border-gray-300 border-t-[#FFD100] rounded-full animate-spin mb-3" />
                            <p className="text-gray-500">Processing image...</p>
                        </div>
                    ) : (
                        <>
                            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center">
                                <Upload className="w-7 h-7 text-gray-400" />
                            </div>
                            <p className="text-gray-700 font-medium mb-1">
                                Tap to upload an image
                            </p>
                            <p className="text-sm text-gray-500">
                                or drag and drop here
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                JPG, PNG • Max 5MB
                            </p>
                        </>
                    )}
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mt-3 flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                </div>
            )}
        </div>
    );
}
