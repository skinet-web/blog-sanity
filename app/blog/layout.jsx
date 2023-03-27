import BlogNavbar from "./BlogNavbar";
import SocialMedia from "../components/SocialMedia";


export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <BlogNavbar />
      <SocialMedia />
      {children}
        
      </body>
    </html>
  )
}
