-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_date ON blog_posts(date DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy: Anyone can read published posts
CREATE POLICY "Allow public read access" ON blog_posts
  FOR SELECT USING (true);

-- Create policy: Only authenticated users can insert/update/delete
CREATE POLICY "Allow authenticated users to manage posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Insert sample blog post
INSERT INTO blog_posts (title, slug, excerpt, content, date) VALUES
(
  'Getting Started with Next.js',
  'getting-started-with-nextjs',
  'Learn the basics of Next.js and how to build modern web applications.',
  '<h2>Getting Started with Next.js</h2><p>Next.js is a React framework for production that gives you the best developer experience.</p><p>In this post, we''ll explore the basics of Next.js and create your first application.</p>',
  NOW() - INTERVAL '7 days'
);

INSERT INTO blog_posts (title, slug, excerpt, content, date) VALUES
(
  'Building Scalable Backend Systems',
  'building-scalable-backend-systems',
  'Discover the principles and practices for building backend systems that scale.',
  '<h2>Building Scalable Backend Systems</h2><p>Scalability is one of the most important aspects of backend development.</p><p>Learn about microservices, caching strategies, and database optimization.</p>',
  NOW() - INTERVAL '14 days'
);
