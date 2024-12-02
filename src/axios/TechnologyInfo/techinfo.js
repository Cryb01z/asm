const data = [
  {
    name: "Apache",
    icon: "/techIcon/apache.jpg",
    description:
      "Apache is a free and open-source cross-platform web server software.",
    version: "2.4.57",
    link: "https://httpd.apache.org/",
    ps: "WEB SERVERS",
  },
  {
    name: "Cloudflare",
    icon: "/techIcon/cloudflare.png",
    description:
      "Cloudflare is a web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.",
    version: "",
    link: "https://www.cloudflare.com/",
    ps: "CDN",
  },
  {
    name: "Microsoft ASP.NET",
    icon: "/techIcon/dotnet.png",
    description:
      "ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages.",
    version: "",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    ps: "WEB FRAMEWORKS",
  },
  {
    name: "IIS",
    icon: "/techIcon/iis.png",
    description:
      "Internet Information Services (IIS) is an extensible web server software created by Microsoft for use with the Windows NT family.",
    version: "10.0",
    link: "https://www.iis.net/",
    ps: "WEB SERVERS",
  },
  {
    name: "jQuery",
    icon: "/techIcon/jquery.png",
    description:
      "jQuery is a JavaScript library which is a free, open-source software designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
    version: "",
    link: "https://jquery.com/",
    ps: "JAVASCRIPT FRAMEWORKS",
  },
  {
    name: "MySQL",
    icon: "/techIcon/mysql.png",
    description:
      "MySQL is an open-source relational database management system.",
    version: "2.4.57",
    link: "https://www.mysql.com/",
    ps: "DATABASES",
  },
  {
    name: "Nginx",
    icon: "/techIcon/nginx.png",
    description:
      "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
    version: "1.18.0",
    link: "https://nginx.org/en/",
    ps: "WEB SERVERS",
  },
  {
    name: "Node.js",
    icon: "/techIcon/nodejs.png",
    description:
      "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
    version: "",
    link: "https://nodejs.org/en",
    ps: "PROGRAMMING LANGUAGES",
  },
  {
    name: "React",
    icon: "/techIcon/react.png",
    description:
      "React is an open-source JavaScript library for building user interfaces or UI components.",
    version: "",
    link: "https://react.dev/",
    ps: "JAVASCRIPT FRAMEWORKS",
  },
  {
    name: "Ubuntu",
    icon: "/techIcon/ubuntu.png",
    description:
      "Ubuntu is a free and open-source operating system on Linux for the enterprise server, desktop, cloud, and IoT.",
    version: "",
    link: "https://ubuntu.com/server",
    ps: "OPERATING SYSTEMS",
  },
  {
    name: "Windows Server",
    icon: "/techIcon/windowserver.png",
    description:
      "Windows Server is a brand name for a group of server operating systems.",
    version: "",
    link: "https://www.microsoft.com/en-us/windows-server",
    ps: "OPERATING SYSTEMS",
  },
  {
    name: "WordPress",
    icon: "/techIcon/wordpress.png",
    description:
      "WordPress is written in the PHP language and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.",
    version: "",
    link: "https://wordpress.com/",
    ps: "CMS",
  },
  {
    name: "Bootstrap",
    icon: "/techIcon/BootsTrap.png",
    description:
      "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.",
    version: "",
    link: "https://getbootstrap.com/",
    ps: "Framework",
  },
  {
    name: "DreamWeaver",
    icon: "/techIcon/DreamWeaver.jpg",
    description:
      "Adobe Dreamweaver is a website creation program that allows you to build and publish web pages almost anywhere with software that supports HTML, CSS, JavaScript and more.",
    version: "",
    link: "https://www.adobe.com/",
    ps: "website creation",
  },
  {
    name: "AngularJS",
    icon: "/techIcon/angularjs.png",
    description:
      "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.",
    version: "",
    link: "https://angularjs.org/",
    ps: "Framework",
  },
  {
    name: "PHP",
    icon: "/techIcon/php.png",
    description:
      "PHP (Hypertext Processor) is a general-purpose scripting language and interpreter that is freely available and widely used for web development. The language is used primarily for server-side scripting, although it can also be used for command-line scripting and, to a limited degree, desktop applications.",
    version: "",
    link: "https://www.php.net/",
    ps: "PROGRAMMING LANGUAGES",
  },
  {
    name: "Debian",
    icon: "/techIcon/debian.png",
    description:
      "Debian is a popular and freely available computer operating system (OS) that uses a Unix-like kernel-- typically Linux -- alongside other program components, many of which come from GNU Project.",
    version: "",
    link: "https://www.debian.org/",
    ps: "operating system (OS)",
  },
  {
    name: "Google Font API",
    icon: "/techIcon/googleFontApi.png",
    description:
      "Google Font API is a web service that supports high-quality open source font files that can be used on your web designs easily.",
    version: "",
    link: "https://developers.google.com/fonts",
    ps: "web service",
  },
  {
    name: "OWL Carousel",
    icon: "/techIcon/OWLCarousel.png",
    description:
      "Owl Carousel is a touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider. Owl can be used for creating beautiful image galleries with thumbnails.",
    version: "",
    link: "https://owlcarousel2.github.io/OwlCarousel2/",
    ps: "web service",
  },
  {
    name: "Express",
    icon: "/techIcon/express.png",
    description:
      "Express is a node js web application framework that provides broad features for building web and mobile applications.",
    version: "",
    link: "https://expressjs.com/",
    ps: "web service",
  },
  {
    name: "Font Awesome",
    icon: "/techIcon/frontawesome.png",
    description:
      "Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.",
    version: "",
    link: "https://fontawesome.com/",
    ps: "web service",
  },
];

const getTechInfo = (tech) => {
  // console.log(tech);
  const info = {
    name: "Updating",
    icon: "/techIcon/update.png",
    description: "Updating",
    version: "Updating",
    link: "Updating",
    ps: "Updating",
  };
  const techInfo = data.find((item) =>
    item.name.toUpperCase().includes(tech.toUpperCase())
  );
  return techInfo ? techInfo : info;
};

export default getTechInfo;
