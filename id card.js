<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ID Card Report Generation | Academia ERP</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .id-card-shadow {
            box-shadow: 0px 2px 4px rgba(0,0,0,0.05), 0px 1px 2px rgba(0,0,0,0.1);
        }
        .id-card-selected {
            outline: 2px solid #708ab5;
            outline-offset: 4px;
        }
        @media print {
            .no-print { display: none !important; }
            .print-only { display: block !important; }
            .id-card-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
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
                    "headline-md": ["Inter"],
                    "label-sm": ["Inter"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "headline-lg": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "14px", "fontWeight": "500"}],
                    "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
</head>
<body class="bg-surface text-on-surface font-body-md overflow-x-hidden">
<!-- SIDE NAV BAR -->
<aside class="fixed left-0 top-0 h-full w-[280px] bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline flex flex-col py-lg px-md no-print z-50">
<div class="mb-xl">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Academia ERP</h1>
<p class="text-label-sm text-on-surface-variant">Higher Ed Management</p>
</div>
<nav class="flex-1 space-y-1">
<!-- Dashboard -->
<a class="flex items-center gap-md px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-body-md">Dashboard</span>
</a>
<!-- Student Records -->
<a class="flex items-center gap-md px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-body-md">Student Records</span>
</a>
<!-- Export Tools (ACTIVE) -->
<a class="flex items-center gap-md px-sm py-xs rounded-lg bg-primary-container text-on-primary-container font-semibold transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="ios_share">ios_share</span>
<span class="font-body-md">Export Tools</span>
</a>
<!-- Reports -->
<a class="flex items-center gap-md px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-body-md">Reports</span>
</a>
</nav>
<div class="mt-auto space-y-1 border-t border-outline-variant pt-lg">
<button class="w-full mb-md bg-primary text-on-primary py-sm rounded-lg font-semibold flex items-center justify-center gap-xs hover:opacity-90 active:scale-95 transition-all">
<span class="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                New Registration
            </button>
<a class="flex items-center gap-md px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-body-md">Settings</span>
</a>
<a class="flex items-center gap-md px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
<span class="font-body-md">Support</span>
</a>
</div>
</aside>
<!-- TOP NAV BAR -->
<header class="sticky top-0 z-40 w-full bg-surface-container-lowest dark:bg-inverse-surface h-16 ml-[280px] px-margin-desktop flex justify-between items-center shadow-sm no-print" style="width: calc(100% - 280px);">
<div class="flex items-center flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input class="w-full bg-surface-container border-none rounded-full py-2 pl-10 pr-4 text-body-sm focus:ring-2 focus:ring-primary" placeholder="Search students by ID or Name..." type="text"/>
</div>
</div>
<div class="flex items-center gap-lg">
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-all duration-200">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all duration-200">
<span class="material-symbols-outlined" data-icon="help">help</span>
</button>
</div>
<div class="flex items-center gap-sm">
<div class="text-right">
<p class="font-label-md text-label-md text-primary">Administrator</p>
<p class="text-[10px] text-on-surface-variant">Registrar Office</p>
</div>
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged university administrator with a friendly expression. He is wearing a charcoal suit and a light blue shirt. The background is a blurred academic office with books and a soft golden light from a window. High-quality corporate photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3sJD6Tq5ryeYfy-l5PG1i_4ovCcbfxX4H391AJcCNr5ogqL2F6GhhaRkJHArlaVY5yno0cifKyA2mBY3jlCCLrrTetTsgJXOCQupRn4elAqjm0v2kkrQYhojjXbaoJUt34jD4qqVCtOwCQZu60aaehDUHxOIfT2g4oGlagY48MOtU0HxaI36wwVhfZRLy3RTVyufbx9g7jofWcFhys-Db_kqz361eVKSUJGO0AbAdxT36rQ7JxZs6qx23FFL246108_rXYPN1Qw"/>
</div>
</div>
</div>
</header>
<!-- MAIN CONTENT -->
<main class="ml-[280px] p-margin-desktop min-h-screen">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md no-print">
<div>
<nav class="flex items-center gap-xs text-label-sm text-on-surface-variant mb-xs">
<span>Export Tools</span>
<span class="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span class="text-primary font-bold">ID Card Generation</span>
</nav>
<h2 class="font-headline-lg text-headline-lg text-primary">Generate ID Card Report</h2>
<p class="text-body-md text-on-surface-variant">Review student credentials and batch print official university identity cards.</p>
</div>
<div class="flex items-center gap-sm">
<button class="bg-primary text-on-primary px-lg py-sm rounded-lg font-semibold flex items-center gap-sm hover:opacity-90 active:scale-95 transition-all shadow-md" onclick="window.print()">
<span class="material-symbols-outlined" data-icon="print">print</span>
                    Generate ID Card Report
                </button>
</div>
</div>
<!-- Filter & Selection Bar -->
<div class="bg-surface-container-lowest p-md rounded-xl shadow-sm mb-lg flex flex-wrap items-center justify-between gap-md no-print border border-outline-variant">
<div class="flex items-center gap-md">
<div class="flex items-center gap-sm">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer" id="selectAll" onchange="toggleSelectAll(this)" type="checkbox"/>
<label class="text-label-md text-on-surface" for="selectAll">Select All (248 students)</label>
</div>
<div class="h-6 w-[1px] bg-outline-variant"></div>
<div class="flex items-center gap-xs">
<span class="text-label-sm text-on-surface-variant">Batch:</span>
<select class="bg-surface border-outline-variant rounded-lg text-body-sm py-1 px-sm focus:ring-primary">
<option>Fall Semester 2024</option>
<option>Spring Semester 2024</option>
</select>
</div>
<div class="flex items-center gap-xs">
<span class="text-label-sm text-on-surface-variant">Department:</span>
<select class="bg-surface border-outline-variant rounded-lg text-body-sm py-1 px-sm focus:ring-primary">
<option>All Departments</option>
<option>Computer Science</option>
<option>Architecture</option>
<option>Business Administration</option>
</select>
</div>
</div>
<div class="flex items-center gap-sm">
<span class="text-label-sm text-on-surface-variant" id="selectedCount">0 students selected</span>
<button class="text-error font-semibold text-label-md hover:underline">Clear Selection</button>
</div>
</div>
<!-- ID Card Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg id-card-grid">
<!-- ID Card Mockup Template (Repeated via JS or Manual) -->
<!-- Card 1 -->
<div class="group relative bg-white rounded-xl overflow-hidden id-card-shadow border border-outline-variant flex flex-col student-card" onclick="toggleCard(this)">
<div class="absolute top-3 right-3 z-10 no-print">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer card-checkbox" type="checkbox"/>
</div>
<!-- ID Card Header -->
<div class="h-16 bg-primary flex items-center px-md justify-between">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="school">school</span>
</div>
<div class="leading-none">
<p class="text-[10px] font-bold text-white tracking-widest uppercase">Academia</p>
<p class="text-[8px] text-primary-fixed-dim uppercase">University ID</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] text-secondary-container font-bold">2023-2027</p>
</div>
</div>
<!-- ID Card Body -->
<div class="p-md flex gap-md">
<div class="w-24 h-32 bg-surface-container rounded-lg overflow-hidden border border-outline-variant flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A professional ID-style portrait of a female university student with a bright smile. She has dark curly hair and is wearing a maroon academic sweater. The background is a solid light gray, typical of official identification photography. Sharp focus, high clarity, and natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjVJ0Lxisfkzfe7EV25KRizYWz43NtVjEjQSsA8dUVY2qhYRwSBJyQg6wFezo-aLz5DK6qDr-_T2qm1rCV4UDgWWOxzn0K5YV2nD3zpsnWMkVtIrF25R2pm-PeVwU0SNYgzdHJC777Llqiy2D2_6fz72n0Jvc_bwYD1PtGW2FlyzmWub94eN0OARf7jC0NwVJMQexYdTaPcjH_NK_TQPZJ6kZWB5r8gJbmtYXVU8T0ZMTBUlsrvhaA2-HWyOZrpddTSB5a8EdvTA"/>
</div>
<div class="flex-1 flex flex-col justify-between py-xs">
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student Name</p>
<h3 class="text-body-md font-bold text-primary leading-tight">Sarah J. Montgomery</h3>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Major</p>
<p class="text-body-sm font-semibold">Computer Science</p>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student ID</p>
<p class="text-body-sm font-mono tracking-wider">#STU-2024-0891</p>
</div>
</div>
</div>
<!-- Barcode Footer -->
<div class="mt-auto px-md pb-md flex items-center justify-between">
<div class="flex-1 bg-white pt-2 border-t border-outline-variant flex flex-col items-center">
<div class="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_4px)]"></div>
<p class="text-[8px] font-mono mt-1">20240891993021</p>
</div>
</div>
<!-- Status Overlay (Interactive) -->
<div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none no-print"></div>
</div>
<!-- Card 2 -->
<div class="group relative bg-white rounded-xl overflow-hidden id-card-shadow border border-outline-variant flex flex-col student-card" onclick="toggleCard(this)">
<div class="absolute top-3 right-3 z-10 no-print">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer card-checkbox" type="checkbox"/>
</div>
<div class="h-16 bg-primary flex items-center px-md justify-between">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="school">school</span>
</div>
<div class="leading-none">
<p class="text-[10px] font-bold text-white tracking-widest uppercase">Academia</p>
<p class="text-[8px] text-primary-fixed-dim uppercase">University ID</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] text-secondary-container font-bold">2024-2028</p>
</div>
</div>
<div class="p-md flex gap-md">
<div class="w-24 h-32 bg-surface-container rounded-lg overflow-hidden border border-outline-variant flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A clean ID headshot of a male student with short black hair and glasses. He is wearing a dark navy polo shirt. The lighting is balanced and professional against a neutral off-white background, creating a formal academic aesthetic suitable for university credentials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUpxZB6LLF7hy7nAYSaM1p-5htjJ4AsalucBmXxUJT5FFVY3C0nUaOSAnCnddKo5noJuOJydbo_7DOn4xwcOeM8kAmGz9ULYr9rgSqlyZdednUcrnQmWLYBYIvdU-h0nrLhWR9fXLY3JQSX9hDCRfHqmjSelAIWUpCjbPEM8mUHFGWdyBp9yFE3oK9gFkI5gi-60SC8ZiE--wZ7sBaB8DTstKyhMA9AdHtsjyem1h6-ptWqBeRfKiu8jUVh4AQjI-JHfgoJH4PYQ"/>
</div>
<div class="flex-1 flex flex-col justify-between py-xs">
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student Name</p>
<h3 class="text-body-md font-bold text-primary leading-tight">David L. Chen</h3>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Major</p>
<p class="text-body-sm font-semibold">Business Finance</p>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student ID</p>
<p class="text-body-sm font-mono tracking-wider">#STU-2024-1102</p>
</div>
</div>
</div>
<div class="mt-auto px-md pb-md flex items-center justify-between">
<div class="flex-1 bg-white pt-2 border-t border-outline-variant flex flex-col items-center">
<div class="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_3px,#fff_3px,#fff_5px)]"></div>
<p class="text-[8px] font-mono mt-1">20241102778103</p>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="group relative bg-white rounded-xl overflow-hidden id-card-shadow border border-outline-variant flex flex-col student-card" onclick="toggleCard(this)">
<div class="absolute top-3 right-3 z-10 no-print">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer card-checkbox" type="checkbox"/>
</div>
<div class="h-16 bg-primary flex items-center px-md justify-between">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="school">school</span>
</div>
<div class="leading-none">
<p class="text-[10px] font-bold text-white tracking-widest uppercase">Academia</p>
<p class="text-[8px] text-primary-fixed-dim uppercase">University ID</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] text-secondary-container font-bold">2022-2026</p>
</div>
</div>
<div class="p-md flex gap-md">
<div class="w-24 h-32 bg-surface-container rounded-lg overflow-hidden border border-outline-variant flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="Close-up portrait of a young woman with red hair and freckles for an identification card. She is wearing a green knit sweater. The backdrop is a soft cream color. The image is captured with professional studio lighting to ensure clarity for facial recognition. Modern educational identity style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNG-KUbvQc5IPzPeKKYgwKQHoy4hmcuTll0KYpUev9midFL3CZ6YZ02-fSSFgf64Nf0kFGKiO8gIqUT4ArBzvdewrEl2Rt7unfmNt3AwDJOhYDy01imiAz2e1297PinAsAAC15NLEhwyDYSH9yZMj0mTLqCJY4MkVsIHxOBsHrqBP2SlimEsYjQScZn7MhPAn7FyAoidpTLl2it5nvXyGv7OHfwcTJQ5EXxBeI8m4iZ6mlTLkDopDCXJH7Jwn0nmc_LivjQLZ_eQ"/>
</div>
<div class="flex-1 flex flex-col justify-between py-xs">
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student Name</p>
<h3 class="text-body-md font-bold text-primary leading-tight">Elena M. Rossi</h3>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Major</p>
<p class="text-body-sm font-semibold">Architecture</p>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student ID</p>
<p class="text-body-sm font-mono tracking-wider">#STU-2024-0456</p>
</div>
</div>
</div>
<div class="mt-auto px-md pb-md flex items-center justify-between">
<div class="flex-1 bg-white pt-2 border-t border-outline-variant flex flex-col items-center">
<div class="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_3px)]"></div>
<p class="text-[8px] font-mono mt-1">20240456100921</p>
</div>
</div>
</div>
<!-- Card 4 -->
<div class="group relative bg-white rounded-xl overflow-hidden id-card-shadow border border-outline-variant flex flex-col student-card" onclick="toggleCard(this)">
<div class="absolute top-3 right-3 z-10 no-print">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer card-checkbox" type="checkbox"/>
</div>
<div class="h-16 bg-primary flex items-center px-md justify-between">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="school">school</span>
</div>
<div class="leading-none">
<p class="text-[10px] font-bold text-white tracking-widest uppercase">Academia</p>
<p class="text-[8px] text-primary-fixed-dim uppercase">University ID</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] text-secondary-container font-bold">2023-2027</p>
</div>
</div>
<div class="p-md flex gap-md">
<div class="w-24 h-32 bg-surface-container rounded-lg overflow-hidden border border-outline-variant flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="Studio ID portrait of a male university student with short blonde hair and a confident expression. He is wearing a grey hoodie. The lighting is clean and crisp against a flat light blue background, designed for high-resolution card printing. Corporate scholarly aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-nb1hTCfGLEAIJAB7T-wI78wKl-5KMY8yPgT_z36p_QHqyoA1jazDkxFOdLUzSQc6I0Sn8aM4jz8J1AV4ELCNZWk8X3hDlbTKTKFT-hRFYnRpEpWgIrNOda2iQbulKZqozyMaC9WFlv3SNy6iLoJk3hXxJ5yhdWf-X-pz9ftD377rIlGZ1Hw6vmjuwSU2w1rK6B1GyHgnY-hVPWFkC2Zi5fZ3oJYEbzUm1B9yNZwn2F9X1GCxNSKRuyseiKu_KANbWc6_SqKCkQ"/>
</div>
<div class="flex-1 flex flex-col justify-between py-xs">
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student Name</p>
<h3 class="text-body-md font-bold text-primary leading-tight">Marcus K. Thorne</h3>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Major</p>
<p class="text-body-sm font-semibold">Political Science</p>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student ID</p>
<p class="text-body-sm font-mono tracking-wider">#STU-2024-2290</p>
</div>
</div>
</div>
<div class="mt-auto px-md pb-md flex items-center justify-between">
<div class="flex-1 bg-white pt-2 border-t border-outline-variant flex flex-col items-center">
<div class="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_4px,#fff_4px,#fff_6px)]"></div>
<p class="text-[8px] font-mono mt-1">20242290885142</p>
</div>
</div>
</div>
<!-- Card 5 -->
<div class="group relative bg-white rounded-xl overflow-hidden id-card-shadow border border-outline-variant flex flex-col student-card" onclick="toggleCard(this)">
<div class="absolute top-3 right-3 z-10 no-print">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer card-checkbox" type="checkbox"/>
</div>
<div class="h-16 bg-primary flex items-center px-md justify-between">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="school">school</span>
</div>
<div class="leading-none">
<p class="text-[10px] font-bold text-white tracking-widest uppercase">Academia</p>
<p class="text-[8px] text-primary-fixed-dim uppercase">University ID</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] text-secondary-container font-bold">2021-2025</p>
</div>
</div>
<div class="p-md flex gap-md">
<div class="w-24 h-32 bg-surface-container rounded-lg overflow-hidden border border-outline-variant flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="An identification photo of a female student with sleek brown hair wearing a white collared shirt. She has a professional and poised demeanor. The image is taken against a soft grey professional background with high-key lighting to emphasize detail and clarity for ID verification purposes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv26EybZvfciFdxKgeeEB8rm2CJmrNb5PLwTyNzgrl4SO9NvI2KAutLvk-6g61ibZHjmFg58UI0G66nT7PKvoGhoL9KCJfudEiM-mbRf2zpRoQE5DwXrx3lFI_xO-1A1YYKmKCbeEZY3ehANruyDngfoUSvK1ttwKfLokKupZnH4J4__yuGKvJSnQMNRhU2rpWqG7lWoG5L0KmjcUqNt20_ERELKaaEMT33vxnVHZa1mTi2bFc0mguJ1subrnNXBOn1ke-sYKQ_g"/>
</div>
<div class="flex-1 flex flex-col justify-between py-xs">
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student Name</p>
<h3 class="text-body-md font-bold text-primary leading-tight">Sophia G. Winters</h3>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Major</p>
<p class="text-body-sm font-semibold">International Law</p>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student ID</p>
<p class="text-body-sm font-mono tracking-wider">#STU-2024-3310</p>
</div>
</div>
</div>
<div class="mt-auto px-md pb-md flex items-center justify-between">
<div class="flex-1 bg-white pt-2 border-t border-outline-variant flex flex-col items-center">
<div class="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_5px)]"></div>
<p class="text-[8px] font-mono mt-1">20243310556211</p>
</div>
</div>
</div>
<!-- Card 6 -->
<div class="group relative bg-white rounded-xl overflow-hidden id-card-shadow border border-outline-variant flex flex-col student-card" onclick="toggleCard(this)">
<div class="absolute top-3 right-3 z-10 no-print">
<input class="w-5 h-5 rounded border-outline text-primary focus:ring-primary cursor-pointer card-checkbox" type="checkbox"/>
</div>
<div class="h-16 bg-primary flex items-center px-md justify-between">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="school">school</span>
</div>
<div class="leading-none">
<p class="text-[10px] font-bold text-white tracking-widest uppercase">Academia</p>
<p class="text-[8px] text-primary-fixed-dim uppercase">University ID</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] text-secondary-container font-bold">2024-2028</p>
</div>
</div>
<div class="p-md flex gap-md">
<div class="w-24 h-32 bg-surface-container rounded-lg overflow-hidden border border-outline-variant flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A portrait for a student identity card featuring a young man with dark skin, wearing a smart casual beige sweater. He has a neutral, professional expression. The background is a crisp, solid off-white. The lighting is diffused and even, ensuring all facial features are clearly visible for administrative records." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi9RagNFOqar14SDqVpgOLEtF7_sC063DYZYbAS31F2Q7aAWK64m3PitYJ-7GB_LM25TL12bF9VT5NiNORZJ9s57b1KFQFBMzUNa4mWMHPZ5jsGoRembX3VXGfNMwFFpOdmZ-1A77_9B54qeBa6ZNziV_3mqcE5B4zcUP39RoTR6CCFb-1BLdf8srQhopk6pL7YoTrkNxEw9_ddzbGFkYm6ik_5MIP_UtxqhacHzC8iuFtkyNTyLKBujhdZ1FbBWdsUqUiTKh7-g"/>
</div>
<div class="flex-1 flex flex-col justify-between py-xs">
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student Name</p>
<h3 class="text-body-md font-bold text-primary leading-tight">Jordan T. Rivers</h3>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Major</p>
<p class="text-body-sm font-semibold">Visual Arts</p>
</div>
<div>
<p class="text-label-sm text-on-surface-variant uppercase font-bold tracking-tighter">Student ID</p>
<p class="text-body-sm font-mono tracking-wider">#STU-2024-1903</p>
</div>
</div>
</div>
<div class="mt-auto px-md pb-md flex items-center justify-between">
<div class="flex-1 bg-white pt-2 border-t border-outline-variant flex flex-col items-center">
<div class="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_4px)]"></div>
<p class="text-[8px] font-mono mt-1">20241903002918</p>
</div>
</div>
</div>
</div>
<!-- Pagination -->
<div class="mt-xl flex items-center justify-between no-print">
<p class="text-body-sm text-on-surface-variant">Showing 6 of 248 records</p>
<div class="flex items-center gap-xs">
<button class="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold">1</button>
<button class="w-10 h-10 rounded-lg hover:bg-surface-container-low">2</button>
<button class="w-10 h-10 rounded-lg hover:bg-surface-container-low">3</button>
<span class="px-2">...</span>
<button class="w-10 h-10 rounded-lg hover:bg-surface-container-low">42</button>
<button class="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</main>
<!-- Success Toast (Hidden) -->
<div class="fixed bottom-lg right-lg bg-primary text-on-primary px-lg py-md rounded-xl shadow-xl flex items-center gap-md translate-y-24 opacity-0 transition-all duration-300 z-50" id="toast">
<span class="material-symbols-outlined text-secondary-container" data-icon="check_circle">check_circle</span>
<p class="font-semibold" id="toastMessage">Selection Updated</p>
</div>
<script>
        function toggleCard(element) {
            const checkbox = element.querySelector('.card-checkbox');
            checkbox.checked = !checkbox.checked;
            updateCardStyle(element, checkbox.checked);
            updateSelectionCount();
        }

        function updateCardStyle(card, isSelected) {
            if (isSelected) {
                card.classList.add('id-card-selected');
                card.classList.add('bg-primary-container');
                card.classList.add('bg-opacity-5');
            } else {
                card.classList.remove('id-card-selected');
                card.classList.remove('bg-primary-container');
                card.classList.remove('bg-opacity-5');
            }
        }

        function toggleSelectAll(checkbox) {
            const cardCheckboxes = document.querySelectorAll('.card-checkbox');
            cardCheckboxes.forEach(cb => {
                cb.checked = checkbox.checked;
                updateCardStyle(cb.closest('.student-card'), checkbox.checked);
            });
            updateSelectionCount();
            showToast(checkbox.checked ? "All students selected" : "Selection cleared");
        }

        function updateSelectionCount() {
            const selectedCount = document.querySelectorAll('.card-checkbox:checked').length;
            document.getElementById('selectedCount').innerText = `${selectedCount} students selected`;
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').innerText = message;
            toast.classList.remove('translate-y-24', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3000);
        }

        // Initialize event listeners for checkboxes to stop propagation
        document.querySelectorAll('.card-checkbox').forEach(cb => {
            cb.addEventListener('click', (e) => {
                e.stopPropagation();
                updateCardStyle(cb.closest('.student-card'), cb.checked);
                updateSelectionCount();
            });
        });
    </script>
</body></html>