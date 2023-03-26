import BlogNavbar from "./BlogNavbar";



export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <BlogNavbar />
      {children}
        
      </body>
    </html>
  )
}
