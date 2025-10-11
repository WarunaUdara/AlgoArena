# Firebase Setup Guide for AlgoArena

## 🔥 Step 1: Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the **Settings** icon (⚙️) → **Project settings**
4. Scroll down to **"Your apps"** section
5. If you haven't added a web app yet:
   - Click **"Add app"** → Select **Web** (</> icon)
   - Register your app with a nickname (e.g., "AlgoArena Web")
   - Click **"Register app"**
6. You'll see your Firebase configuration. Copy the values.

## 📝 Step 2: Configure Environment Variables

Open the `.env.local` file in your project root and replace the placeholder values with your actual Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🗄️ Step 3: Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **"Create database"**
3. Choose **Production mode** or **Test mode**:
   - **Production mode**: Secure rules (recommended)
   - **Test mode**: Open for 30 days (good for testing)
4. Select a Cloud Firestore location (choose closest to your users)
5. Click **"Enable"**

### Firestore Security Rules (Production)

After creating the database, go to **Rules** tab and use these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Teams collection - anyone can create, only admins can read/update
    match /teams/{teamId} {
      // Allow anyone to create a team registration
      allow create: if request.auth == null || request.auth != null;
      
      // Only authenticated admins can read, update, or delete
      allow read, update, delete: if request.auth != null && 
        request.auth.token.admin == true;
    }
  }
}
```

For testing, you can use these open rules (⚠️ **NOT for production**):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // Open for testing only!
    }
  }
}
```

## 🚀 Step 4: Restart Your Development Server

After adding the environment variables, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Step 5: Test the Registration

1. Navigate to `http://localhost:3000/registration`
2. Fill in the team registration form
3. Click "Register Team"
4. Check your Firestore Database in Firebase Console to see the new team entry!

## 📊 What Gets Stored in Firebase

When a team registers, the following data is saved to Firestore in the `teams` collection:

```json
{
  "teamName": "Team Alpha",
  "universityName": "University of Sri Jayewardenepura",
  "teamLeader": {
    "name": "John Doe",
    "email": "john@example.com",
    "whatsappNo": "+94 77 1234567"
  },
  "teamMembers": [
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "whatsappNo": "+94 77 7654321"
    }
  ],
  "createdAt": "2025-10-11T10:30:00.000Z",
  "status": "pending"
}
```

## 🎯 Features Implemented

✅ **Firebase Integration**: Connected to your Firebase project
✅ **Team Registration**: Saves team data to Firestore
✅ **Duplicate Prevention**: 
   - Team names must be unique
   - Email addresses can only be team leader once
✅ **Loading States**: Shows spinner while submitting
✅ **Success/Error Messages**: User feedback after submission
✅ **Auto Redirect**: Returns to homepage after successful registration

## 🔐 Security Features

- Team name uniqueness check
- Email duplication prevention
- Server-side timestamp
- Status tracking (pending/approved/rejected)

## 📱 Next Steps (Optional)

1. **Email Notifications**: Set up Firebase Cloud Functions to send confirmation emails
2. **Admin Dashboard**: Create an admin panel to view/approve registrations
3. **Analytics**: Enable Firebase Analytics to track registrations
4. **Real-time Updates**: Use Firestore real-time listeners for live registration counts

## ❗ Important Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Keep your Firebase API keys secure
- Set proper Firestore security rules before going live
- Test thoroughly before the event

## 🆘 Troubleshooting

**Error: "Firebase not initialized"**
- Make sure `.env.local` has correct values
- Restart the dev server after adding environment variables

**Error: "Permission denied"**
- Check your Firestore security rules
- Make sure rules allow write access for the `teams` collection

**Data not appearing in Firestore**
- Check Firebase Console → Firestore Database
- Verify the collection is named `teams`
- Check browser console for errors

---

Need help? Check the Firebase docs: https://firebase.google.com/docs/web/setup
