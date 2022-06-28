export default function handler(req, res) {
  // Hardcoded mockup for pages
  const pages = ['About Us', 'News & Events', 'Learning', 'Parents', 'Governors', 'Student Area', 'Contact Us']
  res.status(200).json(pages)
}
