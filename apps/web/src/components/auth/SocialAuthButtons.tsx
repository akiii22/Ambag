
export default function SocialAuthButtons() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Google */}
        <button
          type="button"
          disabled
          aria-label="Continue with Google — coming soon"
          title="Google sign-in is coming soon"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-500 transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          <svg
            viewBox="0 0 48 48"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.24 5.48-4.7 7.18l7.2 5.59c4.2-3.87 6.62-9.57 6.62-17.24z" />
            <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.88.93 7.55 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.79l-7.2-5.59c-2 1.35-4.56 2.16-8.7 2.16-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          </svg>
          Google
        </button>

        {/* Facebook */}
        <button
          type="button"
          disabled
          aria-label="Continue with Facebook — coming soon"
          title="Facebook sign-in is coming soon"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-500 transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              fill="#1877F2"
              d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.08V12h3.045V9.36c0-3.006 1.79-4.67 4.533-4.67 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.925-1.954 1.874V12h3.324l-.532 3.47h-2.792v8.38A12 12 0 0 0 24 12z"
            />
          </svg>
          Facebook
        </button>
      </div>

    </div>
  );
}
