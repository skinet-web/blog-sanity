import BlogNavbar from "./BlogNavbar";
import SocialMedia from "../components/SocialMedia";

export const metadata = {
  title: 'Mihai S | Front-End',
}
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
