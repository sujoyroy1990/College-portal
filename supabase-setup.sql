-- ============================================
-- SUPABASE DATABASE SETUP SQL
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop table if exists (be careful with this in production!)
-- DROP TABLE IF EXISTS students;

-- Create students table
CREATE TABLE IF NOT EXISTS students (
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
    programme TEXT NOT NULL, -- 'Honours' or 'General'
    stream TEXT NOT NULL, -- 'BA', 'BSc', 'BCom'
    department TEXT, -- 'Bachelor of Arts', 'Bachelor of Science', 'Bachelor of Commerce'
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

-- Create index on roll_no for faster lookups
CREATE INDEX IF NOT EXISTS idx_students_roll_no ON students(roll_no);

-- Create index on programme and stream for filtering
CREATE INDEX IF NOT EXISTS idx_students_programme_stream ON students(programme, stream);

-- ============================================
-- ROW LEVEL SECURITY (RLS) SETUP
-- ============================================

-- Enable RLS on the table
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for development/internal tool)
-- WARNING: In production, restrict this properly!
CREATE POLICY "Allow all operations" ON students
    FOR ALL
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- ============================================
-- VERIFY TABLE CREATION
-- ============================================
SELECT * FROM information_schema.columns 
WHERE table_name = 'students' 
ORDER BY ordinal_position;