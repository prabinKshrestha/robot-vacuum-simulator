import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="text-center py-4">
        <h3 className="text-md font-medium"></h3>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Robot Vacuum Simulator &bull; 
         <Link href={"http://www.prabinkumarshrestha.com"} target="_blank">Prabin Kumar Shrestha</Link> 
         &bull; All rights reserved.</p>
      </div>
    </footer>
  );
}
