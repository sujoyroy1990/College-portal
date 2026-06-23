<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Student Records | Academia ERP</title>
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
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar for data density */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
        
        .glass-panel {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
        }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- SideNavBar Anchor -->
<aside class="fixed left-0 top-0 h-full w-[280px] bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline flex flex-col py-lg px-md z-50">
<div class="mb-xl">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed mb-1">Academia ERP</h1>
<p class="font-body-md text-body-md text-on-surface-variant opacity-70">Higher Ed Management</p>
</div>
<nav class="flex-grow space-y-xs">
<!-- Active Tab: Student Records -->
<a class="flex items-center gap-md px-md py-sm rounded-lg transition-colors active:scale-95 duration-150 bg-primary-container text-on-primary-container font-semibold" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-body-md text-body-md">Student Records</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg transition-colors active:scale-95 duration-150 text-on-surface-variant hover:bg-surface-container-low" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg transition-colors active:scale-95 duration-150 text-on-surface-variant hover:bg-surface-container-low" href="#">
<span class="material-symbols-outlined" data-icon="ios_share">ios_share</span>
<span class="font-body-md text-body-md">Export Tools</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg transition-colors active:scale-95 duration-150 text-on-surface-variant hover:bg-surface-container-low" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-body-md text-body-md">Reports</span>
</a>
</nav>
<button class="mt-md w-full bg-primary text-on-primary py-md rounded-lg font-semibold flex items-center justify-center gap-xs hover:opacity-90 transition-all active:scale-95" onclick="toggleModal(true)">
<span class="material-symbols-outlined" data-icon="add">add</span>
            New Registration
        </button>
<div class="mt-xl pt-lg border-t border-outline-variant space-y-xs">
<a class="flex items-center gap-md px-md py-sm rounded-lg transition-colors text-on-surface-variant hover:bg-surface-container-low" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-body-md text-body-md">Settings</span>
</a>
<a class="flex items-center gap-md px-md py-sm rounded-lg transition-colors text-on-surface-variant hover:bg-surface-container-low" href="#">
<span class="material-symbols-outlined" data-icon="help">help</span>
<span class="font-body-md text-body-md">Support</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-[280px] min-h-screen flex flex-col">
<!-- TopNavBar Anchor -->
<header class="sticky top-0 z-40 w-full bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm flex justify-between items-center h-16 px-margin-desktop transition-all duration-200">
<div class="flex items-center gap-lg flex-1">
<span class="font-headline-md text-headline-md font-extrabold text-primary dark:text-inverse-primary">Academia Management</span>
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md" data-icon="search">search</span>
<input class="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-sm focus:ring-2 focus:ring-primary" placeholder="Search records..." type="text"/>
</div>
</div>
<div class="flex items-center gap-md ml-lg">
<button class="text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined" data-icon="help">help</span>
</button>
<div class="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a university administrator in a clean office setting, soft natural lighting, high-end corporate photography style, Navy and White color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMoc3ihZBc3O-adopVzwvmo3wWWehJ5Pt_nods3bMijgE0iQCAoyA12OJDz318qFPrnpACPIXuQuUB_TmE4WK4DQ9yohMPwwlDDuywG0rr0O4t78LZbBYcJg_XZ-M8lG8-cdLSLbEd_NqamNBC93RQ9khgtTJ3A0BfRBzAfigECfGNfp2mKe_Zd-EqBoSh6HpKrHOX0h4MnnIh2Ol2z7toCZ0AFLLtGsE_yvgY4ttp_iF-ZPU8czVYHb3CBcqR_WmGseejH7WYYA"/>
</div>
</div>
</header>
<!-- Dashboard Body -->
<section class="p-lg flex-grow space-y-lg">
<!-- Header Section -->
<div class="flex justify-between items-end">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">Student Records</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Manage and audit enrollment for the Academic Year 2024-25.</p>
</div>
<div class="flex gap-sm">
<button class="flex items-center gap-xs px-md py-sm bg-surface-container-highest border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-dim transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                        Filters
                    </button>
<button class="flex items-center gap-xs px-md py-sm bg-surface-container-highest border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-dim transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="download">download</span>
                        Export PDF
                    </button>
</div>
</div>
<!-- Stats Bento Grid (Quick Overview) -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Students</p>
<div class="flex justify-between items-end">
<span class="font-headline-xl text-headline-xl text-primary">12,482</span>
<span class="text-success text-body-sm font-semibold flex items-center text-green-600">
<span class="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                            +4%
                        </span>
</div>
</div>
<div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">New Enrollment</p>
<div class="flex justify-between items-end">
<span class="font-headline-xl text-headline-xl text-primary">843</span>
<span class="text-on-surface-variant text-body-sm">Last 30 days</span>
</div>
</div>
<div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Completion Rate</p>
<div class="space-y-sm">
<span class="font-headline-xl text-headline-xl text-primary">94.2%</span>
<div class="w-full bg-surface-container-high h-1.5 rounded-full">
<div class="bg-primary h-full rounded-full w-[94%]"></div>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Pending Actions</p>
<div class="flex justify-between items-end">
<span class="font-headline-xl text-headline-xl text-error">24</span>
<button class="text-primary font-label-md text-label-md hover:underline">Review</button>
</div>
</div>
</div>
<!-- Comprehensive Data Table -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low border-b border-outline-variant">
<th class="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Student Name</th>
<th class="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Student ID</th>
<th class="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Department</th>
<th class="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th class="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="p-md">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">AW</div>
<div>
<p class="font-body-md text-body-md font-semibold text-primary">Alexander Wright</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">alex.wright@university.edu</p>
</div>
</div>
</td>
<td class="p-md font-body-md text-body-md">#ST-2024-001</td>
<td class="p-md font-body-md text-body-md">Computer Science</td>
<td class="p-md">
<span class="px-xs py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide">Enrolled</span>
</td>
<td class="p-md text-right">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="bg-surface-container-low hover:bg-surface-container transition-colors">
<td class="p-md">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">EK</div>
<div>
<p class="font-body-md text-body-md font-semibold text-primary">Elena Kostic</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">e.kostic@university.edu</p>
</div>
</div>
</td>
<td class="p-md font-body-md text-body-md">#ST-2024-042</td>
<td class="p-md font-body-md text-body-md">Mechanical Engineering</td>
<td class="p-md">
<span class="px-xs py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide">Pending</span>
</td>
<td class="p-md text-right">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="p-md">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-on-tertiary-fixed">JM</div>
<div>
<p class="font-body-md text-body-md font-semibold text-primary">Julian Moore</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">j.moore@university.edu</p>
</div>
</div>
</td>
<td class="p-md font-body-md text-body-md">#ST-2024-089</td>
<td class="p-md font-body-md text-body-md">Business Admin</td>
<td class="p-md">
<span class="px-xs py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide">Enrolled</span>
</td>
<td class="p-md text-right">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 4 -->
<tr class="bg-surface-container-low hover:bg-surface-container transition-colors">
<td class="p-md">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-error-container flex items-center justify-center font-bold text-on-error-container">SC</div>
<div>
<p class="font-body-md text-body-md font-semibold text-primary">Sarah Chen</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">s.chen@university.edu</p>
</div>
</div>
</td>
<td class="p-md font-body-md text-body-md">#ST-2024-115</td>
<td class="p-md font-body-md text-body-md">Biotechnology</td>
<td class="p-md">
<span class="px-xs py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wide">On Leave</span>
</td>
<td class="p-md text-right">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-surface-container transition-colors">
<td class="p-md">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center font-bold text-primary">DB</div>
<div>
<p class="font-body-md text-body-md font-semibold text-primary">Daniel Brooks</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">d.brooks@university.edu</p>
</div>
</div>
</td>
<td class="p-md font-body-md text-body-md">#ST-2024-203</td>
<td class="p-md font-body-md text-body-md">Applied Arts</td>
<td class="p-md">
<span class="px-xs py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide">Enrolled</span>
</td>
<td class="p-md text-right">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination Footer -->
<div class="p-md bg-surface-container-low flex justify-between items-center">
<p class="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 5 of 12,482 entries</p>
<div class="flex gap-xs">
<button class="p-2 rounded-lg hover:bg-surface-container transition-colors disabled:opacity-30" disabled="">
<span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button class="px-3 py-1 rounded-lg bg-primary text-on-primary font-bold">1</button>
<button class="px-3 py-1 rounded-lg hover:bg-surface-container transition-colors">2</button>
<button class="px-3 py-1 rounded-lg hover:bg-surface-container transition-colors">3</button>
<button class="p-2 rounded-lg hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
<!-- Secondary Layout Element: Department Breakdown Card -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div class="lg:col-span-2 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
<div class="flex justify-between items-center mb-md">
<h3 class="font-headline-md text-headline-md text-primary">Admission Trends</h3>
<select class="bg-surface-container border-none rounded-lg text-label-sm font-label-sm px-md py-1">
<option>Last 6 Months</option>
<option>Last Year</option>
</select>
</div>
<!-- Placeholder for Chart -->
<div class="w-full h-48 bg-surface-container-low rounded-lg relative overflow-hidden flex items-end px-md gap-4">
<div class="bg-primary/20 w-full h-[30%] rounded-t-sm"></div>
<div class="bg-primary/40 w-full h-[45%] rounded-t-sm"></div>
<div class="bg-primary/60 w-full h-[60%] rounded-t-sm"></div>
<div class="bg-primary w-full h-[85%] rounded-t-sm"></div>
<div class="bg-primary/50 w-full h-[55%] rounded-t-sm"></div>
<div class="bg-primary/30 w-full h-[40%] rounded-t-sm"></div>
<div class="bg-primary/80 w-full h-[75%] rounded-t-sm"></div>
</div>
</div>
<div class="bg-primary text-on-primary p-lg rounded-xl flex flex-col justify-between shadow-lg">
<div>
<h3 class="font-headline-md text-headline-md mb-xs">Institutional Goal</h3>
<p class="opacity-80 text-body-sm mb-lg">Academic enrollment target for the Q3 expansion phase.</p>
<div class="text-center py-md">
<div class="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-on-primary/20 border-t-secondary relative">
<span class="font-headline-xl text-headline-xl">78%</span>
</div>
</div>
</div>
<button class="w-full py-md bg-on-primary text-primary rounded-lg font-bold hover:bg-secondary-container transition-colors">
                        View Detailed Report
                    </button>
</div>
</div>
</section>
</main>
<!-- Add New Student Modal (Hidden by default) -->
<div class="fixed inset-0 z-50 hidden flex items-center justify-center bg-primary/40 backdrop-blur-sm px-margin-mobile" id="registrationModal">
<div class="bg-surface w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
<div class="p-lg bg-primary text-on-primary flex justify-between items-center">
<div>
<h3 class="font-headline-md text-headline-md">New Student Registration</h3>
<p class="font-body-sm text-body-sm opacity-80">Please fill out the institutional enrollment form.</p>
</div>
<button class="hover:bg-on-primary/10 p-sm rounded-full transition-colors" onclick="toggleModal(false)">
<span class="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<form class="p-lg space-y-md" id="newStudentForm">
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block">Full Legal Name</label>
<input class="w-full border-outline-variant focus:ring-primary focus:border-primary rounded-lg" placeholder="John Doe" required="" type="text"/>
</div>
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block">Email Address</label>
<input class="w-full border-outline-variant focus:ring-primary focus:border-primary rounded-lg" placeholder="john.doe@university.edu" required="" type="email"/>
</div>
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block">Department</label>
<select class="w-full border-outline-variant focus:ring-primary focus:border-primary rounded-lg">
<option>Computer Science</option>
<option>Business Administration</option>
<option>Mechanical Engineering</option>
<option>Biotechnology</option>
</select>
</div>
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block">Academic Year</label>
<select class="w-full border-outline-variant focus:ring-primary focus:border-primary rounded-lg">
<option>2024 - 2025</option>
<option>2025 - 2026</option>
</select>
</div>
</div>
<div class="space-y-xs">
<label class="font-label-sm text-label-sm text-on-surface-variant block">Upload Identity Document (PDF/JPG)</label>
<div class="border-2 border-dashed border-outline-variant rounded-xl p-lg text-center hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
<span class="material-symbols-outlined text-primary text-headline-xl mb-xs" data-icon="cloud_upload">cloud_upload</span>
<p class="font-body-md text-body-md text-on-surface">Click to upload or drag and drop</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Maximum file size: 5MB</p>
</div>
</div>
<div class="pt-lg flex justify-end gap-md border-t border-outline-variant mt-lg">
<button class="px-lg py-md text-primary font-bold hover:bg-surface-container transition-colors" onclick="toggleModal(false)" type="button">Cancel</button>
<button class="px-lg py-md bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all" type="submit">Submit Registration</button>
</div>
</form>
</div>
</div>
<script>
        function toggleModal(show) {
            const modal = document.getElementById('registrationModal');
            if (show) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        document.getElementById('newStudentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Mock submission success
            alert('Registration data saved successfully!');
            toggleModal(false);
        });

        // Add some subtle hover effects to table rows with JS for better interaction feel
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.transform = 'translateX(4px)';
                row.style.transition = 'transform 0.2s ease-out';
            });
            row.addEventListener('mouseleave', () => {
                row.style.transform = 'translateX(0)';
            });
        });
    </script>
</body></html>