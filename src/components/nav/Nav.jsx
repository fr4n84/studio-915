export default function Nav() {
  return (
    <>
      <div className="flex fixed top-0 left-0 right-0 mt-10">
        <span className="text-8xl logo-size">913</span>
        <nav className="flex justify-between  uppercase grow px-8">
          <a href="#">
            <span>studio</span>
          </a>
          <a href="#">
            <span>exp</span>
          </a>
          <a href="#">
            <span>contact</span>
          </a>
        </nav>
      </div>
    </>
  );
}
