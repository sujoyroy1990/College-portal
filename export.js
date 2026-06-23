<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Export Tools | Academia Management</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                    "headline-lg-mobile": ["Inter"],
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
                    "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
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
<style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 10px;
        }
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full w-[280px] bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline flex flex-col py-lg px-md z-50">
<div class="mb-xl">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Academia ERP</h1>
<p class="font-body-md text-body-md text-on-surface-variant opacity-70">Higher Ed Management</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-body-md text-body-md">Student Records</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container text-on-primary-container font-semibold transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined">ios_share</span>
<span class="font-body-md text-body-md">Export Tools</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150 active:scale-95" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-body-md text-body-md">Reports</span>
</a>
</nav>
<div class="mt-auto pt-lg border-t border-outline-variant space-y-1">
<button class="w-full mb-md bg-primary text-on-primary font-semibold py-sm px-md rounded-lg flex items-center justify-center gap-xs active:scale-95 transition-all">
<span class="material-symbols-outlined">add</span>
                New Registration
            </button>
<a class="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-body-md text-body-md">Settings</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-body-md text-body-md">Support</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<div class="ml-[280px] min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="sticky top-0 z-40 w-full h-16 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm flex justify-between items-center px-margin-desktop">
<div class="flex items-center flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-label-md font-label-md" placeholder="Search data modules..." type="text"/>
</div>
</div>
<div class="flex items-center gap-lg">
<div class="flex gap-md">
<button class="text-on-surface-variant hover:text-primary transition-all duration-200">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all duration-200">
<span class="material-symbols-outlined">help</span>
</button>
</div>
<div class="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a university administrator in a modern office, wearing professional academic attire, soft natural window lighting, high-end corporate photography style, neutral professional background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAthXlI1AxcHSiOI41bzIk9-CAiHvBhrgi9KTl1OAlwxo8yOugJpp09U4FlbfMwlr9KFYLQEFGSqTv3lq9VL-26C5MNPe8jQ41u__2kMttXnCo8dM9VXU4TYSgEEZ3CyNnnJxVsqZxOAyuh3yQtUOjoh4rImdS40Ifp0ojaWfvsttQG91m6w79ppYhKqauB9kmB_KsgfxzQs7UCRVdIAvSKW7g47TW25YcbcOKIAy4eYCsYxxCtGfhoImHstgw4fuH46z48BNzyqQ"/>
</div>
</div>
</header>
<!-- Canvas -->
<main class="p-lg flex-1">
<div class="max-w-container-max mx-auto">
<header class="mb-lg">
<h2 class="font-headline-xl text-headline-xl text-primary mb-xs">Export Tools</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">Configure and download university datasets in standardized formats.</p>
</header>
<div class="bento-grid">
<!-- Configuration Panel -->
<section class="col-span-12 lg:col-span-4 space-y-gutter">
<div class="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-outline-variant">
<div class="flex items-center gap-sm mb-lg">
<div class="bg-secondary-container p-xs rounded-lg">
<span class="material-symbols-outlined text-on-secondary-container">table_chart</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary">Excel Export</h3>
</div>
<form class="space-y-md">
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Department</label>
<select class="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary font-body-md">
<option>All Departments</option>
<option>Computer Science</option>
<option>Mechanical Engineering</option>
<option>Digital Humanities</option>
<option>Applied Mathematics</option>
</select>
</div>
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Academic Year</label>
<select class="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary font-body-md">
<option>2023 - 2024</option>
<option>2022 - 2023</option>
<option>2021 - 2022</option>
</select>
</div>
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Data Scope</label>
<div class="grid grid-cols-2 gap-xs">
<label class="flex items-center gap-xs p-sm border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span class="font-body-sm text-body-sm">Student Info</span>
</label>
<label class="flex items-center gap-xs p-sm border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span class="font-body-sm text-body-sm">Grades</span>
</label>
<label class="flex items-center gap-xs p-sm border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
<input class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span class="font-body-sm text-body-sm">Attendance</span>
</label>
<label class="flex items-center gap-xs p-sm border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
<input class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span class="font-body-sm text-body-sm">Financials</span>
</label>
</div>
</div>
<button class="w-full bg-primary text-on-primary font-semibold py-md rounded-lg flex items-center justify-center gap-sm mt-lg hover:shadow-lg active:scale-[0.98] transition-all" type="button">
<span class="material-symbols-outlined">download</span>
                                    Export to Excel (.xlsx)
                                </button>
</form>
</div>
<div class="bg-primary-container text-on-primary-container rounded-xl p-lg shadow-sm overflow-hidden relative">
<div class="relative z-10">
<h4 class="font-headline-md text-headline-md mb-xs">Scheduled Exports</h4>
<p class="font-body-sm text-body-sm opacity-80 mb-md">Automate your monthly reporting by setting up recurring data snapshots.</p>
<button class="text-label-md font-label-md underline underline-offset-4 hover:opacity-80 transition-opacity">Manage Schedules</button>
</div>
<div class="absolute -right-4 -bottom-4 opacity-10">
<span class="material-symbols-outlined text-[120px]" style="font-variation-settings: 'FILL' 1;">calendar_today</span>
</div>
</div>
</section>
<!-- Data Preview Panel -->
<section class="col-span-12 lg:col-span-8 flex flex-col h-full">
<div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant flex flex-col flex-1 overflow-hidden">
<div class="p-lg border-b border-outline-variant flex justify-between items-center bg-white">
<div class="flex items-center gap-md">
<h3 class="font-headline-md text-headline-md text-primary">Data Preview</h3>
<span class="bg-surface-container text-on-surface-variant px-md py-base rounded-full text-label-sm font-label-sm">482 Rows Identified</span>
</div>
<div class="flex gap-xs">
<button class="p-xs hover:bg-surface-container rounded transition-colors text-on-surface-variant"><span class="material-symbols-outlined">refresh</span></button>
<button class="p-xs hover:bg-surface-container rounded transition-colors text-on-surface-variant"><span class="material-symbols-outlined">fullscreen</span></button>
</div>
</div>
<div class="flex-1 overflow-auto custom-scrollbar">
<table class="w-full border-collapse text-left">
<thead class="sticky top-0 bg-surface-container z-10">
<tr>
<th class="px-md py-sm font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Student ID</th>
<th class="px-md py-sm font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Full Name</th>
<th class="px-md py-sm font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Department</th>
<th class="px-md py-sm font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">GPA</th>
<th class="px-md py-sm font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr class="hover:bg-surface-container-low transition-colors bg-white">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-001</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Dr. Elena Rodriguez</td>
<td class="px-md py-md font-body-sm text-body-sm">Computer Science</td>
<td class="px-md py-md font-body-sm text-body-sm">3.92</td>
<td class="px-md py-md">
<span class="bg-green-100 text-green-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">Enrolled</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors bg-surface-container-low/30">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-042</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Marcus Sterling</td>
<td class="px-md py-md font-body-sm text-body-sm">Mechanical Engineering</td>
<td class="px-md py-md font-body-sm text-body-sm">3.75</td>
<td class="px-md py-md">
<span class="bg-green-100 text-green-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">Enrolled</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors bg-white">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-118</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Sophia Chen</td>
<td class="px-md py-md font-body-sm text-body-sm">Digital Humanities</td>
<td class="px-md py-md font-body-sm text-body-sm">4.00</td>
<td class="px-md py-md">
<span class="bg-blue-100 text-blue-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">On Leave</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors bg-surface-container-low/30">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-205</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Jameson Thorne</td>
<td class="px-md py-md font-body-sm text-body-sm">Applied Mathematics</td>
<td class="px-md py-md font-body-sm text-body-sm">3.48</td>
<td class="px-md py-md">
<span class="bg-orange-100 text-orange-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">Probation</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors bg-white">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-311</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Olivia Vance</td>
<td class="px-md py-md font-body-sm text-body-sm">Computer Science</td>
<td class="px-md py-md font-body-sm text-body-sm">3.88</td>
<td class="px-md py-md">
<span class="bg-green-100 text-green-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">Enrolled</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors bg-surface-container-low/30">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-356</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Dr. Alistair Cook</td>
<td class="px-md py-md font-body-sm text-body-sm">Mechanical Engineering</td>
<td class="px-md py-md font-body-sm text-body-sm">3.61</td>
<td class="px-md py-md">
<span class="bg-green-100 text-green-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">Enrolled</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors bg-white">
<td class="px-md py-md font-body-sm text-body-sm font-mono">#STU-2023-402</td>
<td class="px-md py-md font-body-md text-body-md font-semibold">Isabella Rossi</td>
<td class="px-md py-md font-body-sm text-body-sm">Digital Humanities</td>
<td class="px-md py-md font-body-sm text-body-sm">3.95</td>
<td class="px-md py-md">
<span class="bg-green-100 text-green-800 px-sm py-base rounded-full text-[11px] font-bold uppercase tracking-tighter">Enrolled</span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-md bg-surface-container border-t border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span class="material-symbols-outlined text-[18px]">info</span>
                                    Showing a preview of the first 100 entries.
                                </div>
<div class="flex gap-sm">
<button class="px-md py-base border border-outline text-on-surface font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors">Previous</button>
<button class="px-md py-base bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-opacity">Next</button>
</div>
</div>
</div>
</section>
<!-- Secondary Export Formats -->
<section class="col-span-12">
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="bg-surface-container-lowest border border-outline-variant p-md rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
<div class="flex items-center gap-sm mb-xs">
<span class="material-symbols-outlined text-error font-bold">picture_as_pdf</span>
<h4 class="font-headline-md text-headline-md text-primary">PDF Reports</h4>
</div>
<p class="text-body-sm text-on-surface-variant mb-md">Formal, non-editable academic transcripts and semester summaries.</p>
<span class="text-label-md font-label-md text-primary group-hover:underline flex items-center gap-xs">Generate PDF <span class="material-symbols-outlined text-[16px]">chevron_right</span></span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-md rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
<div class="flex items-center gap-sm mb-xs">
<span class="material-symbols-outlined text-primary">code</span>
<h4 class="font-headline-md text-headline-md text-primary">JSON / XML</h4>
</div>
<p class="text-body-sm text-on-surface-variant mb-md">Structured data for integration with LMS or third-party academic systems.</p>
<span class="text-label-md font-label-md text-primary group-hover:underline flex items-center gap-xs">Export Code <span class="material-symbols-outlined text-[16px]">chevron_right</span></span>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-md rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
<div class="flex items-center gap-sm mb-xs">
<span class="material-symbols-outlined text-secondary">database</span>
<h4 class="font-headline-md text-headline-md text-primary">SQL Dump</h4>
</div>
<p class="text-body-sm text-on-surface-variant mb-md">Full database backups and relational snapshots for archiving.</p>
<span class="text-label-md font-label-md text-primary group-hover:underline flex items-center gap-xs">Request Dump <span class="material-symbols-outlined text-[16px]">chevron_right</span></span>
</div>
</div>
</section>
</div>
</div>
</main>
<!-- Footer -->
<footer class="p-lg border-t border-outline-variant bg-surface-container-lowest mt-auto">
<div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
<p class="font-body-sm text-body-sm text-on-surface-variant opacity-60">© 2024 Academia ERP Management System. All rights reserved.</p>
<div class="flex gap-lg">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">Data Policy</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">Audit Logs</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">System Status</a>
</div>
</div>
</footer>
</div>
<!-- Micro-interactions Script -->
<script>
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.addEventListener('mousedown', () => btn.classList.add('scale-95'));
                btn.addEventListener('mouseup', () => btn.classList.remove('scale-95'));
                btn.addEventListener('mouseleave', () => btn.classList.remove('scale-95'));
            });

            // Simulated feedback for the export button
            const exportBtn = document.querySelector('button[type="button"]');
            if (exportBtn) {
                exportBtn.addEventListener('click', () => {
                    const originalContent = exportBtn.innerHTML;
                    exportBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> Preparing...';
                    exportBtn.disabled = true;
                    
                    setTimeout(() => {
                        exportBtn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Export Started';
                        exportBtn.classList.remove('bg-primary');
                        exportBtn.classList.add('bg-green-600');
                        
                        setTimeout(() => {
                            exportBtn.innerHTML = originalContent;
                            exportBtn.classList.add('bg-primary');
                            exportBtn.classList.remove('bg-green-600');
                            exportBtn.disabled = false;
                        }, 2000);
                    }, 1500);
                });
            }
        });
    </script>
</body></html>