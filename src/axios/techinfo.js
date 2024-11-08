const data = [
  {
    name: "Apache HTTP Server",
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
];

const getTechInfo = (tech) => {
  return data.filter((item) => item.name.includes(tech));
};

export default getTechInfo;