import "../App.css";

export const TechCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="">Technologies</h2>
      <div className="p-10 bg-primary flex flex-col gap-6">
        <h2 className="text-base">Web Development</h2>
        <div className="flex flex-wrap gap-4 text-sm font-extralight">
          <p>REACT.JS</p>
          <p>TAILWIND CSS</p>
          <p>BOOTSTRAP</p>
          <p>SHADCN</p>
          <p>VITE</p>
        </div>
      </div>
      <div className="p-10 bg-primary flex flex-col gap-6">
        <h2 className="text-base">Backend</h2>
        <div className="flex flex-wrap gap-4 text-sm font-extralight">
          <p>LARAVEL</p>
          <p>NODE.JS</p>
          <p>EXPRESS.JS</p>
          <p>AUTH0</p>
        </div>
      </div>
      <div className="p-10 bg-primary flex flex-col gap-6">
        <h2 className="text-base">Database</h2>
        <div className="flex flex-wrap gap-4 text-sm font-extralight">
          <p>MYSQL</p>
        </div>
      </div>
      <div className="p-10 bg-primary flex flex-col gap-6">
        <h2 className="text-base">Hosting</h2>
        <div className="flex flex-wrap gap-4 text-sm font-extralight">
          <p>VERCEL</p>
          <p>NETLIFY</p>
          <p>AWS</p>
          <p>GITHUB PAGES</p>
        </div>
      </div>
      <div className="p-10 bg-primary flex flex-col gap-6">
        <h2 className="text-base">Design</h2>
        <div className="flex flex-wrap gap-4 text-sm font-extralight">
          <p>FIGMA</p>
          <p>ADOBE PHOTOSHOP</p>
          <p>ADOBE ILLUSTRATOR</p>
          <p>ADOBE LIGHTROOM</p>
          <p>CAPCUT</p>
        </div>
      </div>
    </div>
  );
};
