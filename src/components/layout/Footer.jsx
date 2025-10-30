const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h4 className="font-bold">Binyane Private Tutoring</h4>
          <p className="text-sm text-gray-600">After-school programs for Primary & Secondary learners</p>
        </div>
        <div className="text-sm text-gray-600">
          <p>Phone: 078 345 6789</p>
          <p>Email: info@binyane.co.za</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 p-3">© {new Date().getFullYear()} Binyane — All rights reserved</div>
    </footer>
  )
}
 export default Footer;