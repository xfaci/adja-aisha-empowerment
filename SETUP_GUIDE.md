# AISHA EMPOWERMENT - Setup Guide

This guide explains how to set up external services to make the admin panel fully functional for production use.

---

## Current Status

Right now, the admin panel works but saves data **locally in the browser**. This means:
- ✅ You can test editing content
- ✅ Changes are saved on your device
- ❌ Other people won't see your changes
- ❌ If you clear browser data, changes are lost

To make changes visible to everyone on the internet, you need to connect a **database** and **image storage** service.

---

## Option 1: Supabase (Recommended - Free Tier Available)

Supabase is easy to set up and has a generous free tier.

### Step 1: Create a Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up with GitHub or email
3. Create a new project (choose a region close to Guinea, like Europe)

### Step 2: Create the Database Tables

In the Supabase dashboard, go to **SQL Editor** and run:

amliorer


Install Supabase client:

```bash
npm install @supabase/supabase-js
```

---

## Option 2: Firebase (Google)

Firebase is another popular option with a free tier.

### Step 1: Create Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Enable **Firestore Database** and **Storage**

### Step 2: Configure Firestore

1. Create a collection called `siteContent`
2. Add a document with ID `main`
3. Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /siteContent/{doc} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Step 3: Configure Storage

1. Go to Storage → Rules
2. Set up rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Step 4: Get Configuration

1. Go to Project Settings → General
2. Scroll to "Your apps" → Web app
3. Copy the config object

### Step 5: Add to Your Project

Create `.env`:

```env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
```

Install Firebase:

```bash
npm install firebase
```

---

## Option 3: Cloudinary (Images Only)

If you only need image hosting (and use another service for data), Cloudinary is excellent for images.

### Step 1: Create Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for free account

### Step 2: Get Credentials
1. Go to Dashboard
2. Copy:
   - Cloud name
   - Upload preset (create one in Settings → Upload)

### Step 3: Configure

```env
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

---

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Add environment variables in Site Settings
5. Deploy!

### Traditional Hosting
If using traditional hosting (like shared hosting):
1. Run `npm run build`
2. Upload contents of `dist` folder to your server
3. Configure server to serve `index.html` for all routes

---

## Domain Setup

### Option A: Buy a domain
1. Go to [namecheap.com](https://namecheap.com) or [name.com](https://name.com)
2. Search for domain (e.g., `aishaempowerement.com` or `aishaempowerement.gn`)
3. Purchase domain
4. Point DNS to your hosting (Vercel/Netlify provides instructions)

### Option B: Use free subdomain
- Vercel: `your-project.vercel.app`
- Netlify: `your-project.netlify.app`

---

## SSL Certificate (HTTPS)

- **Vercel/Netlify**: Automatic SSL included ✅
- **Traditional hosting**: Use Let's Encrypt (free) or ask your hosting provider

---

## Admin Authentication

Currently, the admin uses a simple password (`admin123`). For production:

### Option 1: Change the password
Edit `src/hooks/useAuth.ts` and change the password.

### Option 2: Use Supabase Auth
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(url, key);

// Login
await supabase.auth.signInWithPassword({
  email: 'admin@aishaempowerement.com',
  password: 'secure-password'
});
```

### Option 3: Use Firebase Auth
```typescript
import { signInWithEmailAndPassword } from 'firebase/auth';

await signInWithEmailAndPassword(auth, email, password);
```

---

## Summary Checklist

- [ ] Choose a database (Supabase or Firebase)
- [ ] Set up image storage
- [ ] Add environment variables
- [ ] Deploy to Vercel or Netlify
- [ ] Set up custom domain (optional)
- [ ] Change admin password

---

## Need Help?

Contact your developer for assistance with any of these steps. They can:
1. Set up the database for you
2. Configure image uploads
3. Deploy the site
4. Connect your domain

---

## Costs Overview

| Service | Free Tier | Paid (if needed) |
|---------|-----------|------------------|
| Supabase | 500MB database, 1GB storage | $25/month |
| Firebase | 1GB storage, 50K reads/day | Pay as you go |
| Cloudinary | 25GB storage, 25GB bandwidth | $99/month |
| Vercel | Unlimited sites | $20/month (team) |
| Netlify | 100GB bandwidth | $19/month |
| Domain | - | $10-15/year |

**For a small business website, the free tiers are usually sufficient!**
