import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Robot Vacuum Simulator  &nbsp; &bull;   &nbsp; 
         <Link href={"http://www.prabinkumarshrestha.com"} target="_blank">Prabin Kumar Shrestha</Link>  &nbsp; 
         &bull; &nbsp; All rights reserved.</p>
      </div>
    </footer>
  );
}
