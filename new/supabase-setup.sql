-- ============================================
-- SUPABASE DATABASE SETUP - COMPLETE
-- Run this in Supabase SQL Editor (New Query)
-- ============================================

-- Step 1: Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Step 2: Drop existing table if any (careful in production!)
DROP TABLE IF EXISTS students CASCADE;

-- Step 3: Create students table with ALL columns
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Basic Information
    student_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    guardian_name TEXT,
    mobile_no TEXT NOT NULL,
    emergency_contact TEXT,
    blood_group TEXT,
    address TEXT,

    -- Programme Information
    programme TEXT NOT NULL,
    stream TEXT NOT NULL,
    department TEXT,
    roll_no TEXT NOT NULL UNIQUE,
    session TEXT DEFAULT '2026',

    -- Major and Minor Subjects
    major_subject TEXT,
    minor_1 TEXT,
    minor_2 TEXT,
    minor_3 TEXT,

    -- MDC Subjects (Honours: Sem I, II, III | General: Sem IV, V, VI)
    mdc_sem1 TEXT,
    mdc_sem2 TEXT,
    mdc_sem3 TEXT,
    mdc_gen_sem4 TEXT,
    mdc_gen_sem5 TEXT,
    mdc_gen_sem6 TEXT,

    -- SEC Subjects
    sec_sem1 TEXT,
    sec_sem2 TEXT,
    sec_sem3 TEXT,
    sec_gen_sem3 TEXT,
    sec_gen_sem4 TEXT,
    sec_gen_sem5 TEXT,
    sec_gen_sem6 TEXT,

    -- VAC & AEC
    vac_sem1 TEXT DEFAULT 'Yoga and Meditation',
    vac_sem2 TEXT DEFAULT 'Cyber Security',
    aec_sem1 TEXT DEFAULT 'English',
    aec_sem2 TEXT DEFAULT 'English',
    aec_sem3 TEXT
);

-- Step 4: Create indexes for better performance
CREATE INDEX idx_students_roll_no ON students(roll_no);
CREATE INDEX idx_students_programme_stream ON students(programme, stream);

-- Step 5: Enable Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Step 6: Create policy for anonymous access (for internal tool)
CREATE POLICY "Allow all operations" ON students
    FOR ALL
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Step 7: Verify table creation
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'students'
ORDER BY ordinal_position;