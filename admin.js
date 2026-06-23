<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Academia ERP - Secure Login</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .login-card-blur {
            backdrop-filter: blur(12px);
            background-color: rgba(255, 255, 255, 0.9);
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-surface-variant": "#44474e",
                      "error": "#ba1a1a",
                      "surface-container": "#edeeef",
                      "surface-variant": "#e1e3e4",
                      "primary": "#000a1e",
                      "tertiary-fixed": "#dfe3e9",
                      "on-tertiary-fixed-variant": "#43474c",
                      "on-tertiary": "#ffffff",
                      "on-background": "#191c1d",
                      "on-error": "#ffffff",
                      "tertiary-fixed-dim": "#c3c7cd",
                      "tertiary-container": "#1d2226",
                      "surface": "#f8f9fa",
                      "surface-container-highest": "#e1e3e4",
                      "surface-bright": "#f8f9fa",
                      "inverse-surface": "#2e3132",
                      "on-primary-container": "#708ab5",
                      "primary-fixed-dim": "#aec7f6",
                      "secondary-fixed": "#ffdea5",
                      "on-secondary": "#ffffff",
                      "on-tertiary-container": "#85898f",
                      "on-secondary-fixed": "#261900",
                      "tertiary": "#070b0f",
                      "surface-tint": "#465f88",
                      "inverse-primary": "#aec7f6",
                      "primary-fixed": "#d6e3ff",
                      "on-primary-fixed": "#001b3d",
                      "on-secondary-fixed-variant": "#5d4201",
                      "primary-container": "#002147",
                      "inverse-on-surface": "#f0f1f2",
                      "on-primary-fixed-variant": "#2d476f",
                      "secondary-container": "#fed488",
                      "on-tertiary-fixed": "#171c20",
                      "on-surface": "#191c1d",
                      "outline": "#74777f",
                      "surface-container-lowest": "#ffffff",
                      "background": "#f8f9fa",
                      "error-container": "#ffdad6",
                      "secondary": "#775a19",
                      "surface-container-low": "#f3f4f5",
                      "on-secondary-container": "#785a1a",
                      "on-primary": "#ffffff",
                      "outline-variant": "#c4c6cf",
                      "surface-dim": "#d9dadb",
                      "secondary-fixed-dim": "#e9c176",
                      "surface-container-high": "#e7e8e9",
                      "on-error-container": "#93000a"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "xs": "8px",
                      "xl": "48px",
                      "margin-desktop": "32px",
                      "base": "4px",
                      "margin-mobile": "16px",
                      "container-max": "1440px",
                      "sm": "16px",
                      "gutter": "24px",
                      "lg": "32px",
                      "md": "24px"
              },
              "fontFamily": {
                      "headline-lg": ["Inter"],
                      "body-md": ["Inter"],
                      "headline-xl": ["Inter"],
                      "body-lg": ["Inter"],
                      "body-sm": ["Inter"],
                      "headline-md": ["Inter"],
                      "label-sm": ["Inter"],
                      "label-md": ["Inter"]
              },
              "fontSize": {
                      "headline-lg": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "headline-xl": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                      "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                      "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                      "label-sm": ["12px", {"lineHeight": "14px", "fontWeight": "500"}],
                      "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}]
              }
            },
          },
        }
      </script>
</head>
<body class="bg-surface text-on-surface flex items-center justify-center min-h-screen relative overflow-hidden">
<!-- Background Layer with Prompt-driven Content -->
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center transition-transform duration-[20000ms] scale-110 hover:scale-100" data-alt="A grand university library interior featuring towering oak bookshelves filled with leather-bound volumes and long mahogany study tables. The space is bathed in the warm, golden glow of classic green-shaded brass lamps and natural afternoon light filtering through large arched windows. The atmosphere is scholarly, silent, and prestigious, utilizing a professional palette of deep browns, forest greens, and navy blues to evoke academic excellence." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCm4LQeXP0Nk7x9BzgWPRS-Ve_TmLeO1e54ixpEqeSeP00EUNml0_JHj9K6lVoEN302TrV2YQCAwICrB6fpjkKCXQryCJ6qccgFI7udhkxgkTn_wBJl73boUfzMVJEQzI6FlfJSHwVacNPBtSpe_g11b4mMoIWwYtGYBA3SM9ZSebvjeomKDH6r33pAO7wF9gl9srf1hNK6KLoLUsxOwqt2ZC0SReTC6CBaiW6n1czMtSjQlNIQEm69E-nmWTfjrFzrNKxMgUdwMA')">
</div>
<!-- Dark Overlay for Readability -->
<div class="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
</div>
<!-- Login Container -->
<main class="relative z-10 w-full max-w-[440px] px-margin-mobile md:px-0">
<div class="login-card-blur p-xl rounded-xl shadow-2xl border border-outline-variant/30 flex flex-col gap-lg">
<!-- Branding Header -->
<header class="text-center">
<div class="flex justify-center mb-md">
<div class="w-16 h-16 bg-primary flex items-center justify-center rounded-full shadow-lg">
<span class="material-symbols-outlined text-on-primary text-[32px]">school</span>
</div>
</div>
<h1 class="font-headline-xl text-headline-xl text-primary mb-xs">Academia ERP</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Higher Ed Management Portal</p>
</header>
<!-- Login Form -->
<form action="#" class="flex flex-col gap-md" id="loginForm" method="POST">
<!-- Username Field -->
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface-variant ml-xs" for="username">Institutional ID / Email</label>
<div class="relative group">
<span class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">person</span>
<input class="w-full pl-xl pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md" id="username" name="username" placeholder="e.g. s1234567" required="" type="text"/>
</div>
</div>
<!-- Password Field -->
<div class="flex flex-col gap-xs">
<div class="flex justify-between items-center px-xs">
<label class="font-label-md text-label-md text-on-surface-variant" for="password">Security Password</label>
<a class="font-label-sm text-label-sm text-secondary hover:text-secondary-fixed-dim transition-colors" href="#">Forgot Password?</a>
</div>
<div class="relative group">
<span class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
<input class="w-full pl-xl pr-[48px] py-md bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<button class="absolute right-sm top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" onclick="togglePassword()" type="button">
<span class="material-symbols-outlined" id="eyeIcon">visibility</span>
</button>
</div>
</div>
<!-- Remember Me & Policy -->
<div class="flex items-center gap-sm px-xs py-xs">
<input class="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" id="remember" name="remember" type="checkbox"/>
<label class="font-body-sm text-body-sm text-on-surface-variant" for="remember">Stay signed in for 30 days</label>
</div>
<!-- Login Action -->
<button class="mt-xs bg-primary text-on-primary font-label-md text-label-md py-md rounded-lg shadow-md hover:bg-primary-container hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-sm" type="submit">
<span class="material-symbols-outlined">login</span>
                    Secure Login
                </button>
</form>
<!-- Social/SSO Divider -->
<div class="relative flex items-center py-xs">
<div class="flex-grow border-t border-outline-variant"></div>
<span class="flex-shrink mx-md font-label-sm text-label-sm text-on-surface-variant">OR ACCESS VIA</span>
<div class="flex-grow border-t border-outline-variant"></div>
</div>
<!-- SSO Options -->
<div class="grid grid-cols-2 gap-sm">
<button class="flex items-center justify-center gap-xs py-sm border border-outline-variant rounded-lg font-label-sm text-label-sm text-on-surface hover:bg-surface-container transition-colors">
<svg class="w-5 h-5" viewbox="0 0 24 24"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.478,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="currentColor"></path></svg>
                    Microsoft
                </button>
<button class="flex items-center justify-center gap-xs py-sm border border-outline-variant rounded-lg font-label-sm text-label-sm text-on-surface hover:bg-surface-container transition-colors">
<svg class="w-5 h-5" viewbox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.35 4 12.68 4 12s.1-1.35.26-2h3.38c-.09.66-.14 1.32-.14 2s.05 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 3.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.09-.66.14-1.32.14-2s-.05-1.34-.14-2h3.38c.16.65.26 1.32.26 2s-.1 1.35-.26 2h-3.38z" fill="currentColor"></path></svg>
                    EduID
                </button>
</div>
<!-- Support Footer -->
<footer class="text-center pt-xs">
<p class="font-body-sm text-body-sm text-on-surface-variant">
                    Need assistance? <a class="text-primary font-semibold hover:underline" href="#">Contact IT Support</a>
</p>
</footer>
</div>
</main>
<!-- Floating Atmosphere Elements -->
<div class="fixed bottom-lg right-lg z-20 flex gap-md">
<div class="p-sm bg-surface-container-lowest/80 backdrop-blur rounded-full border border-outline-variant shadow-sm flex items-center gap-xs">
<span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Systems Operational</span>
</div>
</div>
<script>
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.getElementById('eyeIcon');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.textContent = 'visibility_off';
            } else {
                passwordInput.type = 'password';
                eyeIcon.textContent = 'visibility';
            }
        }

        // Simple subtle entrance animation
        document.addEventListener('DOMContentLoaded', () => {
            const card = document.querySelector('main');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });

        // Form submission loading state simulation
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Validating Credentials...
            `;
            
            // Mock delay
            setTimeout(() => {
                // Success simulation would redirect here
                btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Access Granted`;
                btn.classList.replace('bg-primary', 'bg-green-700');
            }, 1500);
        });
    </script>
</body></html>