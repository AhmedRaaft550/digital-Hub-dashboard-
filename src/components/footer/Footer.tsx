const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 font-medium">
          © {currentYear}{" "}
          <span className="text-amber-900 font-bold">
            Digital Hub Dashboard
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
