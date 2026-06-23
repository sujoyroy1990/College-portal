// ============================================
// SUPABASE CONFIGURATION - REPLACE THESE!
// ============================================
const SUPABASE_URL = 'https://xttsctrobcopyubzhhda.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dHNjdHJvYmNvcHl1YnpoaGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNDExMDcsImV4cCI6MjA5NzgxNzEwN30.xE3OlqhB24TA6KvbYoeD11reCPk6OREL1susImPuWtU';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================
// DATA DICTIONARIES
// ============================================
const subjects = {
    BA: {
        major: ['Bengali', 'English', 'Education', 'History', 'Journalism & Mass Communication', 'Philosophy', 'Political Science', 'Sanskrit', 'Sociology'],
        minor: ['Bengali', 'English', 'Education', 'History', 'Journalism & Mass Communication', 'Philosophy', 'Political Science', 'Sanskrit', 'Sociology', 'Psychology', 'Economics']
    },
    BSc: {
        major: ['Anthropology', 'Botany', 'Chemistry', 'Computer Science', 'Economics', 'Geography', 'Mathematics', 'Physics', 'Zoology'],
        minor: ['Anthropology', 'Botany', 'Chemistry', 'Computer Science', 'Economics', 'Geography', 'Mathematics', 'Physics', 'Zoology', 'Micro Biology', 'Food and Nutrition', 'Psychology']
    },
    BCom: {
        major: ['Accountancy'],
        minor: []
    }
};

const mdcSubjects = [
    'Sociology', 'Political Science', 'History', 'Journalism', 'Psychology', 'Economics',
    'Philosophy', 'Mathematics', 'Chemistry', 'Computer Application', 'Anthropology',
    'Physics', 'Commerce', 'Library Science', 'Education'
];

// BCom Honours SEC fixed subjects
const bcomHonoursSEC = {
    secSem1: 'Information Technology in Business',
    secSem2: 'Business Ethics and Corporate Governance',
    secSem3: 'E-filing of Tax Returns'
};

// BCom General SEC fixed subjects
const bcomGeneralSEC = {
    secGenSem3: 'Computerised Accounting & E-Business Applications',
    secGenSem4: 'Entrepreneurship Development',
    secGenSem5: 'E-filing of Tax Returns',
    secGenSem6: 'E-Commerce & Business Communication'
};

// Roll No format codes
const rollCodes = {
    Honours: { BA: 'AH', BSc: 'SH', BCom: 'CH' },
    General: { BA: 'AG', BSc: 'SG', BCom: 'CG' }
};

// ============================================
// TAB NAVIGATION
// ============================================
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'master') loadStudents();
    if (tabName === 'idcard') loadIdCardGrid();
}

// ============================================
// PROGRAMME CHANGE HANDLER
// ============================================
function handleProgrammeChange() {
    const programme = document.getElementById('programme').value;

    resetDependentFields();

    if (!programme) {
        document.getElementById('streamSection').classList.add('hidden');
        document.getElementById('majorSection').classList.add('hidden');
        document.getElementById('minorSection').classList.add('hidden');
        document.getElementById('mdcSection').classList.add('hidden');
        document.getElementById('secSection').classList.add('hidden');
        document.getElementById('vacAecSection').classList.add('hidden');
        return;
    }

    document.getElementById('streamSection').classList.remove('hidden');
    document.getElementById('vacAecSection').classList.remove('hidden');
    document.getElementById('mdcSection').classList.remove('hidden');

    if (programme === 'Honours') {
        document.getElementById('majorSection').classList.remove('hidden');
        document.getElementById('minorSection').classList.remove('hidden');
        document.getElementById('secSection').classList.remove('hidden');
        document.getElementById('mdcHonours').classList.remove('hidden');
        document.getElementById('mdcGeneral').classList.add('hidden');
        document.getElementById('secHonours').classList.remove('hidden');
        document.getElementById('secGeneral').classList.add('hidden');
        document.getElementById('minor3Row').classList.add('hidden');
        document.getElementById('minor3').required = false;
    } else {
        document.getElementById('majorSection').classList.add('hidden');
        document.getElementById('minorSection').classList.remove('hidden');
        document.getElementById('secSection').classList.remove('hidden');
        document.getElementById('mdcHonours').classList.add('hidden');
        document.getElementById('mdcGeneral').classList.remove('hidden');
        document.getElementById('secHonours').classList.add('hidden');
        document.getElementById('secGeneral').classList.remove('hidden');
        document.getElementById('minor3Row').classList.remove('hidden');
        document.getElementById('minor3').required = true;
    }

    generateRollNo();
}

// ============================================
// STREAM CHANGE HANDLER
// ============================================
function handleStreamChange() {
    const stream = document.getElementById('stream').value;
    const programme = document.getElementById('programme').value;

    if (!stream) return;

    // Populate Major Subject dropdown
    const majorSelect = document.getElementById('majorSubject');
    majorSelect.innerHTML = '<option value="">-- Select Major Subject --</option>';

    if (programme === 'Honours' && subjects[stream]) {
        subjects[stream].major.forEach(sub => {
            majorSelect.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    }

    // For BCom Honours, auto-select Accountancy and show fixed SEC fields
    if (stream === 'BCom' && programme === 'Honours') {
        majorSelect.value = 'Accountancy';
        handleMajorChange();

        // Hide BA/BSc Honours SEC fields, show BCom Honours fixed SEC fields
        document.getElementById('honSecSem1Group').classList.add('hidden');
        document.getElementById('honSecSem2Group').classList.add('hidden');
        document.getElementById('honSecSem3Group').classList.add('hidden');
        document.getElementById('bcomHonSecSem1Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem2Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem3Group').classList.remove('hidden');

        // Set BCom Honours fixed SEC values
        document.getElementById('bcomHonSecSem1').value = bcomHonoursSEC.secSem1;
        document.getElementById('bcomHonSecSem2').value = bcomHonoursSEC.secSem2;
        document.getElementById('bcomHonSecSem3').value = bcomHonoursSEC.secSem3;
    } else if (programme === 'Honours') {
        // BA/BSc Honours - show normal fields, hide BCom fixed fields
        document.getElementById('honSecSem1Group').classList.remove('hidden');
        document.getElementById('honSecSem2Group').classList.remove('hidden');
        document.getElementById('honSecSem3Group').classList.remove('hidden');
        document.getElementById('bcomHonSecSem1Group').classList.add('hidden');
        document.getElementById('bcomHonSecSem2Group').classList.add('hidden');
        document.getElementById('bcomHonSecSem3Group').classList.add('hidden');
    }

    // For BCom General, hide minor section and show fixed SEC fields
    if (stream === 'BCom' && programme === 'General') {
        document.getElementById('minorSection').classList.add('hidden');

        // Show BCom fixed SEC fields, hide BA/BSc dropdown SEC fields
        document.getElementById('secGenSem5Group').classList.add('hidden');
        document.getElementById('secGenSem6Group').classList.add('hidden');
        document.getElementById('bcomSecGenSem5Group').classList.remove('hidden');
        document.getElementById('bcomSecGenSem6Group').classList.remove('hidden');

        // Set ALL BCom General SEC fixed subjects
        document.getElementById('secGenSem3').value = bcomGeneralSEC.secGenSem3;
        document.getElementById('secGenSem4').value = bcomGeneralSEC.secGenSem4;
        document.getElementById('bcomSecGenSem5').value = bcomGeneralSEC.secGenSem5;
        document.getElementById('bcomSecGenSem6').value = bcomGeneralSEC.secGenSem6;

        // Enable MDC dropdowns for BCom General (no minor dependency)
        enableMDCGeneral();
    } else if (programme === 'General') {
        // BA/BSc General - show dropdown SEC fields, hide BCom fixed fields
        document.getElementById('minorSection').classList.remove('hidden');
        document.getElementById('secGenSem5Group').classList.remove('hidden');
        document.getElementById('secGenSem6Group').classList.remove('hidden');
        document.getElementById('bcomSecGenSem5Group').classList.add('hidden');
        document.getElementById('bcomSecGenSem6Group').classList.add('hidden');

        // Disable MDC until minors are selected
        disableMDCGeneral();
    }

    // Populate Minor Subject dropdowns
    populateMinorSubjects(stream);

    // Populate MDC dropdowns
    populateMDC();

    generateRollNo();
}

// ============================================
// ENABLE/DISABLE MDC GENERAL DROPDOWNS
// ============================================
function disableMDCGeneral() {
    document.getElementById('mdcGenSem4').disabled = true;
    document.getElementById('mdcGenSem5').disabled = true;
    document.getElementById('mdcGenSem6').disabled = true;
    document.getElementById('mdcGenSem4').innerHTML = '<option value="">-- Select Minor 1,2,3 first --</option>';
    document.getElementById('mdcGenSem5').innerHTML = '<option value="">-- Select MDC Sem IV first --</option>';
    document.getElementById('mdcGenSem6').innerHTML = '<option value="">-- Select MDC Sem V first --</option>';
}

function enableMDCGeneral() {
    document.getElementById('mdcGenSem4').disabled = false;
    document.getElementById('mdcGenSem5').disabled = true;
    document.getElementById('mdcGenSem6').disabled = true;
    populateMDCGeneral();
}

// ============================================
// MAJOR CHANGE HANDLER - Remove Major from Minor lists
// ============================================
function handleMajorChange() {
    const major = document.getElementById('majorSubject').value;
    const stream = document.getElementById('stream').value;
    const programme = document.getElementById('programme').value;

    if (!major || !stream || !subjects[stream]) return;

    // Populate Minor 1 without the selected Major subject
    const minor1Select = document.getElementById('minor1');
    minor1Select.innerHTML = '<option value="">-- Select Minor 1 --</option>';

    subjects[stream].minor.forEach(sub => {
        if (sub !== major) {
            minor1Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });

    // Reset Minor 2 and Minor 3
    document.getElementById('minor2').innerHTML = '<option value="">-- Select Minor 2 --</option>';
    document.getElementById('minor3').innerHTML = '<option value="">-- Select Minor 3 --</option>';

    // Update SEC Sem I & II with Major subject (only for BA/BSc Honours)
    if (programme === 'Honours' && stream !== 'BCom') {
        document.getElementById('secSem1').value = major;
        document.getElementById('secSem2').value = major;
    }

    generateRollNo();
}

// ============================================
// MINOR 1 CHANGE HANDLER
// ============================================
function handleMinor1Change() {
    const minor1 = document.getElementById('minor1').value;
    const major = document.getElementById('majorSubject').value;
    const stream = document.getElementById('stream').value;
    const programme = document.getElementById('programme').value;

    if (!minor1 || !stream || !subjects[stream]) return;

    // Populate Minor 2 without Major and Minor 1
    const minor2Select = document.getElementById('minor2');
    minor2Select.innerHTML = '<option value="">-- Select Minor 2 --</option>';

    subjects[stream].minor.forEach(sub => {
        if (sub !== major && sub !== minor1) {
            minor2Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });

    // For General, populate Minor 3 without Major, Minor1
    if (programme === 'General') {
        const minor3Select = document.getElementById('minor3');
        minor3Select.innerHTML = '<option value="">-- Select Minor 3 --</option>';
        subjects[stream].minor.forEach(sub => {
            if (sub !== major && sub !== minor1) {
                minor3Select.innerHTML += `<option value="${sub}">${sub}</option>`;
            }
        });
    }

    // Update SEC for General: Sem III & IV = Minor 1 (fixed)
    if (programme === 'General') {
        document.getElementById('secGenSem3').value = minor1;
        document.getElementById('secGenSem4').value = minor1;
    }

    // Update SEC Sem 3 options for Honours (Minor 1 or Minor 2) - only for BA/BSc
    if (programme === 'Honours' && stream !== 'BCom') {
        updateSecSem3Options();
    }

    // Check if all minors are selected for General to enable MDC
    if (programme === 'General') {
        checkMinorsAndEnableMDC();
    }
}

// ============================================
// MINOR 2 CHANGE HANDLER
// ============================================
function handleMinor2Change() {
    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const major = document.getElementById('majorSubject').value;

    // Validate: Minor 1 and Minor 2 cannot be same (only for BA/BSc Honours)
    if (programme === 'Honours' && stream !== 'BCom' && minor1 && minor2 && minor1 === minor2) {
        showMessage('Error: Minor 1 and Minor 2 cannot be the same subject!', 'error');
        document.getElementById('minor2').value = '';
        return;
    }

    // Update SEC Sem 3 for BA/BSc Honours
    if (programme === 'Honours' && stream !== 'BCom') {
        updateSecSem3Options();
    }

    // For General, update Minor 3 options
    if (programme === 'General') {
        if (!stream || !subjects[stream]) return;

        const minor3Select = document.getElementById('minor3');
        const currentValue = minor3Select.value;
        minor3Select.innerHTML = '<option value="">-- Select Minor 3 --</option>';

        subjects[stream].minor.forEach(sub => {
            if (sub !== major && sub !== minor1 && sub !== minor2) {
                minor3Select.innerHTML += `<option value="${sub}">${sub}</option>`;
            }
        });

        if (currentValue && currentValue !== minor1 && currentValue !== minor2 && currentValue !== major) {
            minor3Select.value = currentValue;
        }
    }

    // Check if all minors are selected for General to enable MDC
    if (programme === 'General') {
        checkMinorsAndEnableMDC();
    }
}

// ============================================
// MINOR 3 CHANGE HANDLER
// ============================================
function handleMinor3Change() {
    const programme = document.getElementById('programme').value;

    // Check if all minors are selected for General to enable MDC
    if (programme === 'General') {
        checkMinorsAndEnableMDC();
    }
}

// ============================================
// CHECK ALL MINORS SELECTED AND ENABLE MDC + UPDATE SEC V & VI
// ============================================
function checkMinorsAndEnableMDC() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const stream = document.getElementById('stream').value;

    // For BA/BSc General, all 3 minors must be selected
    if ((stream === 'BA' || stream === 'BSc') && minor1 && minor2 && minor3) {
        enableMDCGeneral();
        // Populate MDC without selected minors
        populateMDCGeneralWithoutMinors();
        // Update SEC Sem V & VI dropdowns with Minor 2 and Minor 3
        updateSecGenSem5Options();
    } else if ((stream === 'BA' || stream === 'BSc') && (!minor1 || !minor2 || !minor3)) {
        disableMDCGeneral();
    }
}

// ============================================
// UPDATE SEC GEN SEM 5 & 6 DROPDOWNS (Minor 2 or Minor 3)
// ============================================
function updateSecGenSem5Options() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const secGenSem5 = document.getElementById('secGenSem5');
    const secGenSem6 = document.getElementById('secGenSem6');

    // Clear and populate SEC Sem V with Minor 2 or Minor 3
    secGenSem5.innerHTML = '<option value="">-- Select --</option>';
    if (minor2) {
        secGenSem5.innerHTML += `<option value="${minor2}">${minor2} (Minor 2)</option>`;
    }
    if (minor3) {
        secGenSem5.innerHTML += `<option value="${minor3}">${minor3} (Minor 3)</option>`;
    }

    // Clear and populate SEC Sem VI with Minor 2 or Minor 3
    secGenSem6.innerHTML = '<option value="">-- Select --</option>';
    if (minor2) {
        secGenSem6.innerHTML += `<option value="${minor2}">${minor2} (Minor 2)</option>`;
    }
    if (minor3) {
        secGenSem6.innerHTML += `<option value="${minor3}">${minor3} (Minor 3)</option>`;
    }
}

// ============================================
// POPULATE MDC GENERAL WITHOUT SELECTED MINORS
// ============================================
function populateMDCGeneralWithoutMinors() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;

    const selectedMinors = [minor1, minor2, minor3].filter(m => m);

    // Reset all MDC dropdowns
    ['mdcGenSem4', 'mdcGenSem5', 'mdcGenSem6'].forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            if (!selectedMinors.includes(sub)) {
                select.innerHTML += `<option value="${sub}">${sub}</option>`;
            }
        });
    });
}

// ============================================
// POPULATE MDC GENERAL (for BCom - no minor restriction)
// ============================================
function populateMDCGeneral() {
    ['mdcGenSem4', 'mdcGenSem5', 'mdcGenSem6'].forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    });
}

// ============================================
// UPDATE SEC SEM 3 OPTIONS (Minor 1 or Minor 2) - BA/BSc Honours
// ============================================
function updateSecSem3Options() {
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const secSem3 = document.getElementById('secSem3');

    secSem3.innerHTML = '<option value="">-- Select --</option>';

    if (minor1) {
        secSem3.innerHTML += `<option value="${minor1}">${minor1} (Minor 1)</option>`;
    }
    if (minor2) {
        secSem3.innerHTML += `<option value="${minor2}">${minor2} (Minor 2)</option>`;
    }
}

// ============================================
// MDC GENERAL SEM 4 CHANGE - Remove from Sem 5 & 6
// ============================================
function handleMDCGenSem4Change() {
    const sem4Val = document.getElementById('mdcGenSem4').value;
    const sem5Select = document.getElementById('mdcGenSem5');
    const sem6Select = document.getElementById('mdcGenSem6');

    if (!sem4Val) {
        sem5Select.disabled = true;
        sem6Select.disabled = true;
        return;
    }

    sem5Select.disabled = false;
    sem6Select.disabled = true;

    // Get selected minors to exclude
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const selectedMinors = [minor1, minor2, minor3].filter(m => m);

    // Reset Sem 5 and Sem 6
    sem5Select.innerHTML = '<option value="">-- Select --</option>';
    sem6Select.innerHTML = '<option value="">-- Select MDC Sem V first --</option>';

    // Populate Sem 5 without Sem 4 selected subject and selected minors
    mdcSubjects.forEach(sub => {
        if (sub !== sem4Val && !selectedMinors.includes(sub)) {
            sem5Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });
}

// ============================================
// MDC GENERAL SEM 5 CHANGE - Remove Sem 4 & 5 from Sem 6
// ============================================
function handleMDCGenSem5Change() {
    const sem4Val = document.getElementById('mdcGenSem4').value;
    const sem5Val = document.getElementById('mdcGenSem5').value;
    const sem6Select = document.getElementById('mdcGenSem6');

    if (!sem5Val) {
        sem6Select.disabled = true;
        return;
    }

    sem6Select.disabled = false;

    // Get selected minors to exclude
    const minor1 = document.getElementById('minor1').value;
    const minor2 = document.getElementById('minor2').value;
    const minor3 = document.getElementById('minor3').value;
    const selectedMinors = [minor1, minor2, minor3].filter(m => m);

    // Reset Sem 6
    sem6Select.innerHTML = '<option value="">-- Select --</option>';

    // Populate Sem 6 without Sem 4, Sem 5 selected subjects and selected minors
    mdcSubjects.forEach(sub => {
        if (sub !== sem4Val && sub !== sem5Val && !selectedMinors.includes(sub)) {
            sem6Select.innerHTML += `<option value="${sub}">${sub}</option>`;
        }
    });
}

// ============================================
// POPULATE MINOR SUBJECTS
// ============================================
function populateMinorSubjects(stream) {
    const programme = document.getElementById('programme').value;
    if (!stream || !subjects[stream]) return;

    const minorOptions = subjects[stream].minor;

    ['minor1', 'minor2', 'minor3'].forEach((id) => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '<option value="">-- Select --</option>';
        minorOptions.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    });

    if (stream === 'BCom') {
        document.getElementById('minorSection').classList.add('hidden');
    }
}

// ============================================
// POPULATE MDC SUBJECTS (Honours)
// ============================================
function populateMDC() {
    const mdcIds = ['mdcSem1', 'mdcSem2', 'mdcSem3'];

    mdcIds.forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '<option value="">-- Select --</option>';
        mdcSubjects.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    });
}

// ============================================
// RESET DEPENDENT FIELDS
// ============================================
function resetDependentFields() {
    document.getElementById('stream').value = '';
    document.getElementById('majorSubject').value = '';
    document.getElementById('minor1').value = '';
    document.getElementById('minor2').value = '';
    document.getElementById('minor3').value = '';

    document.getElementById('secSem1').value = '';
    document.getElementById('secSem2').value = '';
    document.getElementById('secGenSem3').value = '';
    document.getElementById('secGenSem4').value = '';
    document.getElementById('secGenSem5').value = '';
    document.getElementById('secGenSem6').value = '';
    document.getElementById('bcomSecGenSem5').value = '';
    document.getElementById('bcomSecGenSem6').value = '';
    document.getElementById('bcomHonSecSem1').value = '';
    document.getElementById('bcomHonSecSem2').value = '';
    document.getElementById('bcomHonSecSem3').value = '';

    ['mdcSem1', 'mdcSem2', 'mdcSem3', 'mdcGenSem4', 'mdcGenSem5', 'mdcGenSem6'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    document.getElementById('secSem3').value = '';
    document.getElementById('aecSem3').value = '';

    // Reset visibility of all SEC fields
    // Honours
    document.getElementById('honSecSem1Group').classList.remove('hidden');
    document.getElementById('honSecSem2Group').classList.remove('hidden');
    document.getElementById('honSecSem3Group').classList.remove('hidden');
    document.getElementById('bcomHonSecSem1Group').classList.add('hidden');
    document.getElementById('bcomHonSecSem2Group').classList.add('hidden');
    document.getElementById('bcomHonSecSem3Group').classList.add('hidden');

    // General
    document.getElementById('secGenSem5Group').classList.remove('hidden');
    document.getElementById('secGenSem6Group').classList.remove('hidden');
    document.getElementById('bcomSecGenSem5Group').classList.add('hidden');
    document.getElementById('bcomSecGenSem6Group').classList.add('hidden');
}

// ============================================
// GENERATE ROLL NO (Format: 26AH0001, 26SH0001, etc.)
// ============================================
async function generateRollNo() {
    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;

    if (!programme || !stream) {
        document.getElementById('rollNo').value = '';
        return;
    }

    const prefix = '26' + rollCodes[programme][stream];

    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('roll_no')
            .ilike('roll_no', prefix + '%')
            .order('roll_no', { ascending: false })
            .limit(1);

        let lastNum = 0;
        if (data && data.length > 0) {
            const match = data[0].roll_no.match(/\d{4}$/);
            if (match) lastNum = parseInt(match[0]);
        }

        const newNum = String(lastNum + 1).padStart(4, '0');
        document.getElementById('rollNo').value = prefix + newNum;
    } catch (error) {
        console.error('Error generating roll no:', error);
        document.getElementById('rollNo').value = prefix + '0001';
    }
}

// ============================================
// SAVE STUDENT DATA
// ============================================
document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const programme = document.getElementById('programme').value;
    const stream = document.getElementById('stream').value;

    // Validate: Minor 1 and Minor 2 cannot be same for BA/BSc Honours
    if (programme === 'Honours' && stream !== 'BCom') {
        const minor1 = document.getElementById('minor1').value;
        const minor2 = document.getElementById('minor2').value;
        if (minor1 && minor2 && minor1 === minor2) {
            showMessage('Error: Minor 1 and Minor 2 cannot be the same subject!', 'error');
            return;
        }
    }

    // Determine SEC values based on stream and programme
    let secSem1Val, secSem2Val, secSem3Val;
    let secGenSem5Val, secGenSem6Val;

    if (stream === 'BCom' && programme === 'Honours') {
        // BCom Honours - fixed SEC values
        secSem1Val = bcomHonoursSEC.secSem1;
        secSem2Val = bcomHonoursSEC.secSem2;
        secSem3Val = bcomHonoursSEC.secSem3;
    } else if (stream === 'BCom' && programme === 'General') {
        // BCom General - fixed SEC values
        secGenSem5Val = bcomGeneralSEC.secGenSem5;
        secGenSem6Val = bcomGeneralSEC.secGenSem6;
    } else {
        // BA/BSc - get from form
        secSem1Val = document.getElementById('secSem1').value;
        secSem2Val = document.getElementById('secSem2').value;
        secSem3Val = document.getElementById('secSem3').value;
        secGenSem5Val = document.getElementById('secGenSem5').value;
        secGenSem6Val = document.getElementById('secGenSem6').value;
    }

    const studentData = {
        student_name: document.getElementById('studentName').value.trim(),
        father_name: document.getElementById('fatherName').value.trim(),
        guardian_name: document.getElementById('guardianName').value.trim(),
        mobile_no: document.getElementById('mobileNo').value.trim(),
        programme: programme,
        stream: stream,
        department: stream === 'BA' ? 'Bachelor of Arts' : stream === 'BSc' ? 'Bachelor of Science' : 'Bachelor of Commerce',
        roll_no: document.getElementById('rollNo').value,
        session: '2026',
        blood_group: document.getElementById('bloodGroup').value.trim(),
        emergency_contact: document.getElementById('emergencyContact').value.trim(),
        address: document.getElementById('address').value.trim(),
        major_subject: document.getElementById('majorSubject').value || null,
        minor_1: document.getElementById('minor1').value || null,
        minor_2: document.getElementById('minor2').value || null,
        minor_3: document.getElementById('minor3').value || null,
        mdc_sem1: document.getElementById('mdcSem1').value || null,
        mdc_sem2: document.getElementById('mdcSem2').value || null,
        mdc_sem3: document.getElementById('mdcSem3').value || null,
        mdc_gen_sem4: document.getElementById('mdcGenSem4').value || null,
        mdc_gen_sem5: document.getElementById('mdcGenSem5').value || null,
        mdc_gen_sem6: document.getElementById('mdcGenSem6').value || null,
        sec_sem1: secSem1Val || (programme === 'Honours' ? document.getElementById('majorSubject').value : document.getElementById('minor1').value),
        sec_sem2: secSem2Val || (programme === 'Honours' ? document.getElementById('majorSubject').value : document.getElementById('minor1').value),
        sec_sem3: secSem3Val || null,
        sec_gen_sem3: programme === 'General' ? document.getElementById('minor1').value : null,
        sec_gen_sem4: programme === 'General' ? document.getElementById('minor1').value : null,
        sec_gen_sem5: secGenSem5Val || null,
        sec_gen_sem6: secGenSem6Val || null,
        vac_sem1: 'Yoga and Meditation',
        vac_sem2: 'Cyber Security',
        aec_sem1: 'English',
        aec_sem2: 'English',
        aec_sem3: document.getElementById('aecSem3').value || null
    };

    try {
        const { data, error } = await supabaseClient
            .from('students')
            .insert([studentData])
            .select();

        if (error) throw error;

        showMessage('Student data saved successfully! Roll No: ' + studentData.roll_no, 'success');

        // Store the saved student data for printing
        window.lastSavedStudent = studentData;

        // Show print section
        document.getElementById('printSingleSection').classList.remove('hidden');

        document.getElementById('studentForm').reset();
        document.getElementById('session').value = '2026';

        document.getElementById('streamSection').classList.add('hidden');
        document.getElementById('majorSection').classList.add('hidden');
        document.getElementById('minorSection').classList.add('hidden');
        document.getElementById('mdcSection').classList.add('hidden');
        document.getElementById('secSection').classList.add('hidden');
        document.getElementById('vacAecSection').classList.add('hidden');
        document.getElementById('rollNo').value = '';

    } catch (error) {
        showMessage('Error: ' + error.message, 'error');
        console.error('Error:', error);
    }
});

function showMessage(text, type) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = type;
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
}

// ============================================
// LOAD & DISPLAY STUDENTS (MASTER DATA)
// ============================================
async function loadStudents() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        const tbody = document.querySelector('#studentsTable tbody');
        tbody.innerHTML = '';

        data.forEach(student => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${student.roll_no}</td>
                <td>${student.student_name}</td>
                <td>${student.father_name}</td>
                <td>${student.programme}</td>
                <td>${student.stream}</td>
                <td>${student.major_subject || '-'}</td>
                <td>${student.session}</td>
                <td>${student.mobile_no}</td>
                <td>${student.blood_group || '-'}</td>
                <td>
                    <button onclick="deleteStudent('${student.id}')" class="btn-secondary" style="padding: 5px 10px; font-size: 14px;">Delete</button>
                </td>
            `;
        });
    } catch (error) {
        console.error('Error loading students:', error);
    }
}

async function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student?')) return;

    try {
        const { error } = await supabaseClient
            .from('students')
            .delete()
            .eq('id', id);

        if (error) throw error;
        loadStudents();
        showMessage('Student deleted!', 'success');
    } catch (error) {
        showMessage('Error deleting: ' + error.message, 'error');
    }
}

// ============================================
// EXPORT TO EXCEL (Master Data)
// ============================================
async function exportToExcel() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*');

        if (error) throw error;

        const excelData = data.map(s => ({
            'Roll No': s.roll_no,
            'Student Name': s.student_name,
            'Father Name': s.father_name,
            'Guardian Name': s.guardian_name,
            'Mobile No': s.mobile_no,
            'Programme': s.programme,
            'Stream': s.stream,
            'Department': s.department,
            'Major Subject': s.major_subject,
            'Minor 1': s.minor_1,
            'Minor 2': s.minor_2,
            'Minor 3': s.minor_3,
            'Session': s.session,
            'Blood Group': s.blood_group,
            'Emergency Contact': s.emergency_contact,
            'Address': s.address,
            'MDC Sem I': s.mdc_sem1,
            'MDC Sem II': s.mdc_sem2,
            'MDC Sem III': s.mdc_sem3,
            'MDC Gen Sem IV': s.mdc_gen_sem4,
            'MDC Gen Sem V': s.mdc_gen_sem5,
            'MDC Gen Sem VI': s.mdc_gen_sem6,
            'SEC Sem I': s.sec_sem1,
            'SEC Sem II': s.sec_sem2,
            'SEC Sem III': s.sec_sem3,
            'SEC Gen Sem III': s.sec_gen_sem3,
            'SEC Gen Sem IV': s.sec_gen_sem4,
            'SEC Gen Sem V': s.sec_gen_sem5,
            'SEC Gen Sem VI': s.sec_gen_sem6,
            'VAC Sem I': s.vac_sem1,
            'VAC Sem II': s.vac_sem2,
            'AEC Sem I': s.aec_sem1,
            'AEC Sem II': s.aec_sem2,
            'AEC Sem III': s.aec_sem3,
            'Created At': s.created_at
        }));

        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Students");
        XLSX.writeFile(wb, "Master_Students_Data.xlsx");

    } catch (error) {
        console.error('Export error:', error);
    }
}

// ============================================
// ID CARD DATA - DATA GRID INTERFACE
// ============================================
async function loadIdCardGrid() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .order('roll_no');

        if (error) throw error;

        const tbody = document.querySelector('#idCardGrid tbody');
        tbody.innerHTML = '';

        data.forEach(student => {
            const row = tbody.insertRow();
            row.setAttribute('data-id', student.id);
            row.innerHTML = `
                <td>${student.student_name}</td>
                <td>${student.father_name}</td>
                <td>${student.guardian_name || ''}</td>
                <td>${student.programme}</td>
                <td>${student.stream}</td>
                <td>${student.major_subject || ''}</td>
                <td>${student.roll_no}</td>
                <td>${student.session}</td>
                <td>${student.mobile_no}</td>
                <td>${student.blood_group || ''}</td>
                <td>${student.emergency_contact || ''}</td>
                <td>${student.address || ''}</td>
            `;
        });

        // Add click selection for copy/paste
        setupGridSelection();

    } catch (error) {
        console.error('Error loading ID card grid:', error);
    }
}

// ============================================
// GRID SELECTION FOR COPY/PASTE TO EXCEL
// ============================================
function setupGridSelection() {
    const grid = document.getElementById('idCardGrid');
    let selectedRows = new Set();

    grid.querySelectorAll('tbody tr').forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey) {
                // Ctrl+Click: toggle selection
                row.classList.toggle('selected');
                if (row.classList.contains('selected')) {
                    selectedRows.add(row);
                } else {
                    selectedRows.delete(row);
                }
            } else {
                // Single click: clear all, select this one
                grid.querySelectorAll('tbody tr').forEach(r => r.classList.remove('selected'));
                selectedRows.clear();
                row.classList.add('selected');
                selectedRows.add(row);
            }
        });
    });

    // Ctrl+C to copy selected rows
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            const selected = grid.querySelectorAll('tbody tr.selected');
            if (selected.length > 0) {
                copySelectedRows(selected);
            }
        }
    });
}

function copySelectedRows(rows) {
    let text = '';

    // Add header
    const headers = [];
    document.querySelectorAll('#idCardGrid thead th').forEach(th => {
        headers.push(th.textContent);
    });
    text += headers.join('\t') + '\n';

    // Add selected rows
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = [];
        cells.forEach(cell => {
            rowData.push(cell.textContent);
        });
        text += rowData.join('\t') + '\n';
    });

    navigator.clipboard.writeText(text).then(() => {
        showMessage('Selected rows copied! Paste into Excel with Ctrl+V.', 'success');
    }).catch(err => {
        console.error('Copy failed:', err);
    });
}

// ============================================
// EXPORT ID CARD DATA TO EXCEL/CSV
// ============================================
async function exportIdCardToExcel() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .order('roll_no');

        if (error) throw error;

        const excelData = data.map(s => ({
            'Name': s.student_name,
            'Father Name': s.father_name,
            'Guardian Name': s.guardian_name || '',
            'Programme': s.programme,
            'Stream': s.stream,
            'Major Subject': s.major_subject || '',
            'Roll No': s.roll_no,
            'Session': s.session,
            'Mobile No.': s.mobile_no,
            'Blood Group': s.blood_group || '',
            'Emergency Contact': s.emergency_contact || '',
            'Address': s.address || ''
        }));

        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "ID_Card_Data");
        XLSX.writeFile(wb, "ID_Card_Data.xlsx");

    } catch (error) {
        console.error('Export error:', error);
        showMessage('Export failed: ' + error.message, 'error');
    }
}

// ============================================
// PRINT SINGLE STUDENT (Auto-appears after save)
// ============================================
function printSingleStudent() {
    if (!window.lastSavedStudent) {
        showMessage('No student data to print!', 'error');
        return;
    }

    const printHTML = generateSingleStudentPrintHTML(window.lastSavedStudent);

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showMessage('Please allow popups to print!', 'error');
        return;
    }

    printWindow.document.write(printHTML);
    printWindow.document.close();

    setTimeout(() => {
        printWindow.print();
    }, 500);
}

function hidePrintSection() {
    document.getElementById('printSingleSection').classList.add('hidden');
    window.lastSavedStudent = null;
}

function generateSingleStudentPrintHTML(student) {
    const programme = student.programme;
    const stream = student.stream;

    // Minor subjects
    let minorHTML = '';
    if (stream === 'BCom') {
        minorHTML = '<div class="print-row"><span class="print-label">Minor 1:</span><span class="print-value">N/A</span></div><div class="print-row"><span class="print-label">Minor 2:</span><span class="print-value">N/A</span></div>';
    } else if (programme === 'Honours') {
        minorHTML = `<div class="print-row"><span class="print-label">Minor 1:</span><span class="print-value">${student.minor_1 || 'N/A'}</span></div><div class="print-row"><span class="print-label">Minor 2:</span><span class="print-value">${student.minor_2 || 'N/A'}</span></div>`;
    } else {
        minorHTML = `<div class="print-row"><span class="print-label">Minor 1:</span><span class="print-value">${student.minor_1 || 'N/A'}</span></div><div class="print-row"><span class="print-label">Minor 2:</span><span class="print-value">${student.minor_2 || 'N/A'}</span></div><div class="print-row"><span class="print-label">Minor 3:</span><span class="print-value">${student.minor_3 || 'N/A'}</span></div>`;
    }

    // MDC
    let mdcHTML = '';
    if (programme === 'Honours') {
        mdcHTML = `
            <div class="print-row"><span class="print-label">MDC Semester I:</span><span class="print-value">${student.mdc_sem1 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">MDC Semester II:</span><span class="print-value">${student.mdc_sem2 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">MDC Semester III:</span><span class="print-value">${student.mdc_sem3 || 'N/A'}</span></div>`;
    } else {
        mdcHTML = `
            <div class="print-row"><span class="print-label">MDC Semester IV:</span><span class="print-value">${student.mdc_gen_sem4 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">MDC Semester V:</span><span class="print-value">${student.mdc_gen_sem5 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">MDC Semester VI:</span><span class="print-value">${student.mdc_gen_sem6 || 'N/A'}</span></div>`;
    }

    // SEC
    let secHTML = '';
    if (stream === 'BCom' && programme === 'Honours') {
        secHTML = `
            <div class="print-row"><span class="print-label">SEC Semester I:</span><span class="print-value">Information Technology in Business</span></div>
            <div class="print-row"><span class="print-label">SEC Semester II:</span><span class="print-value">Business Ethics and Corporate Governance</span></div>
            <div class="print-row"><span class="print-label">SEC Semester III:</span><span class="print-value">E-filing of Tax Returns</span></div>`;
    } else if (stream === 'BCom' && programme === 'General') {
        secHTML = `
            <div class="print-row"><span class="print-label">SEC Semester III:</span><span class="print-value">Computerised Accounting & E-Business Applications</span></div>
            <div class="print-row"><span class="print-label">SEC Semester IV:</span><span class="print-value">Entrepreneurship Development</span></div>
            <div class="print-row"><span class="print-label">SEC Semester V:</span><span class="print-value">E-filing of Tax Returns</span></div>
            <div class="print-row"><span class="print-label">SEC Semester VI:</span><span class="print-value">E-Commerce & Business Communication</span></div>`;
    } else if (programme === 'Honours') {
        secHTML = `
            <div class="print-row"><span class="print-label">SEC Semester I:</span><span class="print-value">${student.sec_sem1 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">SEC Semester II:</span><span class="print-value">${student.sec_sem2 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">SEC Semester III:</span><span class="print-value">${student.sec_sem3 || 'N/A'}</span></div>`;
    } else {
        secHTML = `
            <div class="print-row"><span class="print-label">SEC Semester III:</span><span class="print-value">${student.sec_gen_sem3 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">SEC Semester IV:</span><span class="print-value">${student.sec_gen_sem4 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">SEC Semester V:</span><span class="print-value">${student.sec_gen_sem5 || 'N/A'}</span></div>
            <div class="print-row"><span class="print-label">SEC Semester VI:</span><span class="print-value">${student.sec_gen_sem6 || 'N/A'}</span></div>`;
    }

    // VAC & AEC with full names
    const vacAecHTML = `
        <div class="print-row"><span class="print-label">VAC Semester I:</span><span class="print-value">Yoga and Meditation</span></div>
        <div class="print-row"><span class="print-label">VAC Semester II:</span><span class="print-value">Cyber Security</span></div>
        <div class="print-row"><span class="print-label">AEC Semester I:</span><span class="print-value">English</span></div>
        <div class="print-row"><span class="print-label">AEC Semester II:</span><span class="print-value">English</span></div>
        <div class="print-row"><span class="print-label">AEC Semester III:</span><span class="print-value">${student.aec_sem3 || 'N/A'}</span></div>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Data - ${student.student_name}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: white;
            padding: 20px;
        }

        .print-container {
            max-width: 800px;
            margin: 0 auto;
            border: 2px solid #1a1a2e;
            border-radius: 10px;
            overflow: hidden;
        }

        .print-header {
            background: linear-gradient(135deg, #1a1a2e 0%, #2d3561 100%);
            color: white;
            padding: 20px;
            text-align: center;
        }

        .print-header h2 {
            font-size: 24px;
            margin-bottom: 5px;
        }

        .print-header p {
            font-size: 16px;
            opacity: 0.9;
        }

        .print-body {
            padding: 25px;
            font-size: 14px;
            line-height: 1.6;
        }

        .print-section {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 15px;
            background: #fafafa;
        }

        .print-section-title {
            font-size: 16px;
            font-weight: bold;
            color: #1a1a2e;
            border-bottom: 2px solid #1a1a2e;
            padding-bottom: 5px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

        .print-row {
            display: flex;
            padding: 6px 0;
            border-bottom: 1px solid #eee;
        }

        .print-row:last-child {
            border-bottom: none;
        }

        .print-label {
            font-weight: 600;
            color: #555;
            min-width: 200px;
        }

        .print-value {
            color: #333;
            flex: 1;
        }

        .print-footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #999;
            border-top: 1px solid #ddd;
        }

        @media print {
            body { padding: 0; }
            .print-container { border: 2px solid #000; }
        }
    </style>
</head>
<body>
    <div class="print-container">
        <div class="print-header">
            <h2>${student.student_name}</h2>
            <p>Roll No: ${student.roll_no} | Session: ${student.session}</p>
        </div>
        <div class="print-body">
            <div class="print-section">
                <div class="print-section-title">Basic Information</div>
                <div class="print-row"><span class="print-label">Student Name:</span><span class="print-value">${student.student_name}</span></div>
                <div class="print-row"><span class="print-label">Father Name:</span><span class="print-value">${student.father_name}</span></div>
                <div class="print-row"><span class="print-label">Guardian Name:</span><span class="print-value">${student.guardian_name || 'N/A'}</span></div>
                <div class="print-row"><span class="print-label">Mobile No.:</span><span class="print-value">${student.mobile_no}</span></div>
                <div class="print-row"><span class="print-label">Blood Group:</span><span class="print-value">${student.blood_group || 'N/A'}</span></div>
                <div class="print-row"><span class="print-label">Emergency Contact:</span><span class="print-value">${student.emergency_contact || 'N/A'}</span></div>
                <div class="print-row"><span class="print-label">Address:</span><span class="print-value">${student.address || 'N/A'}</span></div>
            </div>

            <div class="print-section">
                <div class="print-section-title">Programme Information</div>
                <div class="print-row"><span class="print-label">Programme:</span><span class="print-value">${programme}</span></div>
                <div class="print-row"><span class="print-label">Stream:</span><span class="print-value">${stream}</span></div>
                <div class="print-row"><span class="print-label">Major Subject:</span><span class="print-value">${student.major_subject || 'N/A'}</span></div>
                <div class="print-row"><span class="print-label">Session:</span><span class="print-value">${student.session}</span></div>
            </div>

            <div class="print-section">
                <div class="print-section-title">Minor Subjects</div>
                ${minorHTML}
            </div>

            <div class="print-section">
                <div class="print-section-title">MDC (Multidisciplinary Course) Subjects</div>
                ${mdcHTML}
            </div>

            <div class="print-section">
                <div class="print-section-title">SEC (Skill Enhancement Course) Subjects</div>
                ${secHTML}
            </div>

            <div class="print-section">
                <div class="print-section-title">VAC & AEC Subjects</div>
                ${vacAecHTML}
            </div>
        </div>
        <div class="print-footer">
            Generated on ${new Date().toLocaleDateString()} | Institution Name
        </div>
    </div>
    <script>
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 300);
        };
    </script>
</body>
</html>`;
}

// ============================================
// PRINT ALL STUDENTS - A4 Portrait 3 per page
// ============================================
async function printAllStudents() {
    try {
        const { data, error } = await supabaseClient
            .from('students')
            .select('*')
            .order('roll_no');

        if (error) throw error;

        if (!data || data.length === 0) {
            showMessage('No students found to print!', 'error');
            return;
        }

        // Generate print HTML
        const printHTML = generatePrintHTML(data);

        // Open in new window/tab
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            showMessage('Please allow popups to print!', 'error');
            return;
        }

        printWindow.document.write(printHTML);
        printWindow.document.close();

        // Auto-print after a short delay to ensure content loads
        setTimeout(() => {
            printWindow.print();
        }, 500);

    } catch (error) {
        console.error('Print error:', error);
        showMessage('Print failed: ' + error.message, 'error');
    }
}

function generatePrintHTML(students) {
    const totalPages = Math.ceil(students.length / 3);
    let pagesHTML = '';

    for (let page = 0; page < totalPages; page++) {
        const pageStudents = students.slice(page * 3, (page + 1) * 3);
        const pageNum = page + 1;

        let cardsHTML = '';
        pageStudents.forEach(student => {
            cardsHTML += generateStudentCard(student);
        });

        pagesHTML += `
        <div class="a4-page">
            <div class="page-header">
                <h2>Student Academic Information</h2>
                <p>Session: 2026 | Institution Name</p>
            </div>
            ${cardsHTML}
            <div class="page-footer">
                Page ${pageNum} of ${totalPages} | Generated on ${new Date().toLocaleDateString()}
            </div>
        </div>`;
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Print - A4</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: white;
            padding: 0;
        }

        .a4-page {
            width: 210mm;
            min-height: 297mm;
            max-height: 297mm;
            padding: 8mm;
            margin: 0 auto;
            background: white;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            page-break-after: always;
        }

        .a4-page:last-child {
            page-break-after: auto;
        }

        .page-header {
            text-align: center;
            border-bottom: 2px solid #1a1a2e;
            padding-bottom: 4px;
            margin-bottom: 6px;
        }

        .page-header h2 {
            font-size: 13px;
            color: #1a1a2e;
            margin-bottom: 2px;
        }

        .page-header p {
            font-size: 9px;
            color: #666;
        }

        .student-card {
            border: 1.5px solid #333;
            border-radius: 5px;
            margin-bottom: 5px;
            overflow: hidden;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .student-card:last-child {
            margin-bottom: 0;
        }

        .card-header {
            background: linear-gradient(135deg, #1a1a2e 0%, #2d3561 100%);
            color: white;
            padding: 3px 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card-header .student-name {
            font-size: 12px;
            font-weight: bold;
        }

        .card-header .roll-no {
            font-size: 10px;
            background: rgba(255,255,255,0.2);
            padding: 1px 6px;
            border-radius: 8px;
        }

        .card-body {
            padding: 4px 8px;
            font-size: 8px;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .info-row {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .info-item {
            display: flex;
            gap: 2px;
        }

        .info-label {
            font-weight: 600;
            color: #555;
        }

        .info-value {
            color: #333;
        }

        .section-box {
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 2px 4px;
            background: #fafafa;
        }

        .section-title {
            font-size: 7px;
            font-weight: bold;
            color: #1a1a2e;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 1px;
            margin-bottom: 1px;
        }

        .section-content {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;
        }

        .subject-item {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 2px;
            padding: 1px 3px;
            font-size: 7px;
        }

        .subject-item .sem {
            font-weight: 600;
            color: #666;
        }

        .subject-item .subj {
            color: #333;
        }

        .three-col {
            display: flex;
            gap: 3px;
        }

        .three-col .section-box {
            flex: 1;
        }

        .page-footer {
            text-align: center;
            font-size: 7px;
            color: #999;
            border-top: 1px solid #ddd;
            padding-top: 3px;
            margin-top: 3px;
        }

        @media print {
            body { background: white; padding: 0; }
            .a4-page {
                box-shadow: none;
                margin: 0;
                width: 100%;
                height: 100vh;
            }
        }
    </style>
</head>
<body>
    ${pagesHTML}
    <script>
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 300);
        };
    </script>
</body>
</html>`;
}

function generateStudentCard(student) {
    const programme = student.programme;
    const stream = student.stream;

    // Minor subjects display
    let minorHTML = '';
    if (stream === 'BCom') {
        minorHTML = '<div class="subject-item"><span class="sem">N/A</span></div>';
    } else if (programme === 'Honours') {
        minorHTML = `
            <div class="subject-item"><span class="sem">Minor 1:</span> <span class="subj">${student.minor_1 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">Minor 2:</span> <span class="subj">${student.minor_2 || 'N/A'}</span></div>`;
    } else {
        minorHTML = `
            <div class="subject-item"><span class="sem">Minor 1:</span> <span class="subj">${student.minor_1 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">Minor 2:</span> <span class="subj">${student.minor_2 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">Minor 3:</span> <span class="subj">${student.minor_3 || 'N/A'}</span></div>`;
    }

    // MDC subjects display
    let mdcHTML = '';
    if (programme === 'Honours') {
        mdcHTML = `
            <div class="subject-item"><span class="sem">I:</span> <span class="subj">${student.mdc_sem1 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">II:</span> <span class="subj">${student.mdc_sem2 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">III:</span> <span class="subj">${student.mdc_sem3 || 'N/A'}</span></div>`;
    } else {
        mdcHTML = `
            <div class="subject-item"><span class="sem">IV:</span> <span class="subj">${student.mdc_gen_sem4 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">V:</span> <span class="subj">${student.mdc_gen_sem5 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">VI:</span> <span class="subj">${student.mdc_gen_sem6 || 'N/A'}</span></div>`;
    }

    // SEC subjects display
    let secHTML = '';
    if (stream === 'BCom' && programme === 'Honours') {
        secHTML = `
            <div class="subject-item"><span class="sem">I:</span> <span class="subj">IT in Business</span></div>
            <div class="subject-item"><span class="sem">II:</span> <span class="subj">Business Ethics</span></div>
            <div class="subject-item"><span class="sem">III:</span> <span class="subj">E-filing</span></div>`;
    } else if (stream === 'BCom' && programme === 'General') {
        secHTML = `
            <div class="subject-item"><span class="sem">III:</span> <span class="subj">Comp. Accounting</span></div>
            <div class="subject-item"><span class="sem">IV:</span> <span class="subj">Entrepreneurship</span></div>
            <div class="subject-item"><span class="sem">V:</span> <span class="subj">E-filing</span></div>
            <div class="subject-item"><span class="sem">VI:</span> <span class="subj">E-Commerce</span></div>`;
    } else if (programme === 'Honours') {
        secHTML = `
            <div class="subject-item"><span class="sem">I:</span> <span class="subj">${student.sec_sem1 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">II:</span> <span class="subj">${student.sec_sem2 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">III:</span> <span class="subj">${student.sec_sem3 || 'N/A'}</span></div>`;
    } else {
        secHTML = `
            <div class="subject-item"><span class="sem">III:</span> <span class="subj">${student.sec_gen_sem3 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">IV:</span> <span class="subj">${student.sec_gen_sem4 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">V:</span> <span class="subj">${student.sec_gen_sem5 || 'N/A'}</span></div>
            <div class="subject-item"><span class="sem">VI:</span> <span class="subj">${student.sec_gen_sem6 || 'N/A'}</span></div>`;
    }

    // VAC & AEC
    const vacAecHTML = `
        <div class="subject-item"><span class="sem">VAC:</span> <span class="subj">Yoga, Cyber</span></div>
        <div class="subject-item"><span class="sem">AEC:</span> <span class="subj">Eng, Eng, ${student.aec_sem3 || 'N/A'}</span></div>`;

    return `
        <div class="student-card">
            <div class="card-header">
                <span class="student-name">${student.student_name}</span>
                <span class="roll-no">Roll: ${student.roll_no}</span>
            </div>
            <div class="card-body">
                <div class="info-row">
                    <div class="info-item"><span class="info-label">Programme:</span><span class="info-value">${programme}</span></div>
                    <div class="info-item"><span class="info-label">Stream:</span><span class="info-value">${stream}</span></div>
                    <div class="info-item"><span class="info-label">Major:</span><span class="info-value">${student.major_subject || 'N/A'}</span></div>
                    <div class="info-item"><span class="info-label">Session:</span><span class="info-value">${student.session}</span></div>
                </div>

                <div class="section-box">
                    <div class="section-title">Minor Subjects</div>
                    <div class="section-content">
                        ${minorHTML}
                    </div>
                </div>

                <div class="three-col">
                    <div class="section-box">
                        <div class="section-title">MDC Subjects</div>
                        <div class="section-content">
                            ${mdcHTML}
                        </div>
                    </div>
                    <div class="section-box">
                        <div class="section-title">SEC Subjects</div>
                        <div class="section-content">
                            ${secHTML}
                        </div>
                    </div>
                    <div class="section-box">
                        <div class="section-title">VAC & AEC</div>
                        <div class="section-content">
                            ${vacAecHTML}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    loadIdCardGrid();
});