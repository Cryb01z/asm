const data = [
  {
    domain: "antoanthucpham.angiang.gov.vn",
    type: "Subdomain",
    discovery_reason: "Internal ASM",
    discovery_on: "2024-06-03 01:54:26",
    ip: "115.75.91.61",
    services: [
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "21",
        service_name: "ftp",
        software: [
          {
            vendor: "ProFTPD or KnFTPD",
            product: "ProFTPD or KnFTPD",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "22",
        service_name: "ssh",
        software: [
          {
            vendor: "",
            product: "",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "25",
        service_name: "smtp",
        software: [
          {
            vendor: "Exim smtpd",
            product: "Exim smtpd",
            version: "4.90_1",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "53",
        service_name: "domain",
        software: [
          {
            vendor: "ISC BIND",
            product: "ISC BIND",
            version: "9.11.3-1ubuntu1.16",
          },
        ],
        vulnerabilities: [
          {
            id: "PRION:CVE-2021-25216",
            cvss: "6.8",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2021-25216",
          },
          {
            id: "CVE-2021-25216",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25216",
          },
          {
            id: "CVE-2020-8625",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8625",
          },
          {
            id: "PRION:CVE-2020-8625",
            cvss: "5.1",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8625",
          },
          {
            id: "PRION:CVE-2021-25219",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2021-25219",
          },
          {
            id: "PRION:CVE-2021-25215",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2021-25215",
          },
          {
            id: "PRION:CVE-2020-8623",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8623",
          },
          {
            id: "PRION:CVE-2020-8616",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8616",
          },
          {
            id: "PRION:CVE-2019-6477",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2019-6477",
          },
          {
            id: "PRION:CVE-2018-5744",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2018-5744",
          },
          {
            id: "PRION:CVE-2018-5740",
            cvss: "5.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2018-5740",
          },
          {
            id: "PACKETSTORM:157836",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:157836",
          },
          {
            id: "FBC03933-7A65-52F3-83F4-4B2253A490B6",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/FBC03933-7A65-52F3-83F4-4B2253A490B6",
          },
          {
            id: "CVE-2023-2828",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-2828",
          },
          {
            id: "CVE-2022-38178",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-38178",
          },
          {
            id: "CVE-2022-38177",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-38177",
          },
          {
            id: "CVE-2022-2795",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-2795",
          },
          {
            id: "CVE-2021-25219",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25219",
          },
          {
            id: "CVE-2021-25215",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25215",
          },
          {
            id: "CVE-2020-8616",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8616",
          },
          {
            id: "CVE-2019-6470",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-6470",
          },
          {
            id: "CVE-2018-5744",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-5744",
          },
          {
            id: "CVE-2018-5740",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-5740",
          },
          {
            id: "PRION:CVE-2019-6471",
            cvss: "4.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2019-6471",
          },
          {
            id: "PRION:CVE-2019-6465",
            cvss: "4.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2019-6465",
          },
          {
            id: "PRION:CVE-2018-5743",
            cvss: "4.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2018-5743",
          },
          {
            id: "CVE-2020-8623",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8623",
          },
          {
            id: "CVE-2020-8617",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8617",
          },
          {
            id: "CVE-2019-6471",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-6471",
          },
          {
            id: "CVE-2019-6465",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-6465",
          },
          {
            id: "CVE-2018-5743",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-5743",
          },
          {
            id: "1337DAY-ID-34485",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-34485",
          },
          {
            id: "PRION:CVE-2021-25214",
            cvss: "4.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2021-25214",
          },
          {
            id: "PRION:CVE-2020-8624",
            cvss: "4.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8624",
          },
          {
            id: "PRION:CVE-2020-8622",
            cvss: "4.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8622",
          },
          {
            id: "PRION:CVE-2018-5741",
            cvss: "4.0",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2018-5741",
          },
          {
            id: "CVE-2021-25220",
            cvss: "4.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25220",
          },
          {
            id: "CVE-2021-25214",
            cvss: "4.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25214",
          },
          {
            id: "CVE-2020-8624",
            cvss: "4.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8624",
          },
          {
            id: "CVE-2020-8622",
            cvss: "4.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8622",
          },
          {
            id: "CVE-2018-5741",
            cvss: "4.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-5741",
          },
          {
            id: "PRION:CVE-2018-5745",
            cvss: "3.5",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2018-5745",
          },
          {
            id: "CVE-2018-5745",
            cvss: "3.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-5745",
          },
          {
            id: "PRION:CVE-2021-25220",
            cvss: "3.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2021-25220",
          },
          {
            id: "PRION:CVE-2020-8619",
            cvss: "3.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8619",
          },
          {
            id: "PRION:CVE-2020-8617",
            cvss: "2.6",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2020-8617",
          },
        ],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "80",
        service_name: "http",
        software: [
          {
            vendor: "nginx",
            product: "nginx",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "110",
        service_name: "pop3",
        software: [
          {
            vendor: "Dovecot pop3d",
            product: "Dovecot pop3d",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "143",
        service_name: "imap",
        software: [
          {
            vendor: "Dovecot imapd",
            product: "Dovecot imapd",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "443",
        service_name: "http",
        software: [
          {
            vendor: "nginx",
            product: "nginx",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "587",
        service_name: "smtp",
        software: [
          {
            vendor: "Exim smtpd",
            product: "Exim smtpd",
            version: "4.90_1",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "993",
        service_name: "imap",
        software: [
          {
            vendor: "Dovecot imapd",
            product: "Dovecot imapd",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "995",
        service_name: "pop3",
        software: [
          {
            vendor: "Dovecot pop3d",
            product: "Dovecot pop3d",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "2525",
        service_name: "smtp",
        software: [
          {
            vendor: "Exim smtpd",
            product: "Exim smtpd",
            version: "4.90_1",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "3306",
        service_name: "mysql",
        software: [
          {
            vendor: "MySQL",
            product: "MySQL",
            version: "5.7.41-0ubuntu0.18.04.1",
          },
        ],
        vulnerabilities: [
          {
            id: "PRION:CVE-2023-22084",
            cvss: "3.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2023-22084",
          },
          {
            id: "PRION:CVE-2023-22028",
            cvss: "3.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2023-22028",
          },
          {
            id: "PRION:CVE-2023-22026",
            cvss: "3.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2023-22026",
          },
          {
            id: "PRION:CVE-2023-22015",
            cvss: "3.3",
            type: "prion",
            is_exploit: "false",
            reference: "https://vulners.com/prion/PRION:CVE-2023-22015",
          },
        ],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "3389",
        service_name: "ms-wbt-server",
        software: [
          {
            vendor: "Microsoft Terminal Services",
            product: "Microsoft Terminal Services",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8080",
        service_name: "http",
        software: [
          {
            vendor: "Apache httpd",
            product: "Apache httpd",
            version: "2.4.29",
          },
          {
            vendor: "mod_fcgid",
            product: "mod_fcgid",
            version: "2.3.9",
          },
          {
            vendor: "OpenSSL",
            product: "OpenSSL",
            version: "1.1.1g",
          },
        ],
        vulnerabilities: [
          {
            id: "CVE-2019-9517",
            cvss: "7.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-9517",
          },
          {
            id: "PACKETSTORM:171631",
            cvss: "7.5",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:171631",
          },
          {
            id: "EDB-ID:51193",
            cvss: "7.5",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:51193",
          },
          {
            id: "CVE-2022-31813",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-31813",
          },
          {
            id: "CVE-2022-23943",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-23943",
          },
          {
            id: "CVE-2022-22720",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-22720",
          },
          {
            id: "CVE-2021-44790",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-44790",
          },
          {
            id: "CVE-2021-39275",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-39275",
          },
          {
            id: "CVE-2021-26691",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-26691",
          },
          {
            id: "CNVD-2022-73123",
            cvss: "7.5",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-73123",
          },
          {
            id: "CNVD-2022-03225",
            cvss: "7.5",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-03225",
          },
          {
            id: "CNVD-2021-102386",
            cvss: "7.5",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2021-102386",
          },
          {
            id: "1337DAY-ID-38427",
            cvss: "7.5",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-38427",
          },
          {
            id: "EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB",
            cvss: "7.2",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB",
          },
          {
            id: "EDB-ID:46676",
            cvss: "7.2",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:46676",
          },
          {
            id: "CVE-2019-0211",
            cvss: "7.2",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0211",
          },
          {
            id: "1337DAY-ID-32502",
            cvss: "7.2",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-32502",
          },
          {
            id: "FDF3DFA1-ED74-5EE2-BF5C-BA752CA34AE8",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/FDF3DFA1-ED74-5EE2-BF5C-BA752CA34AE8",
          },
          {
            id: "CVE-2021-40438",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-40438",
          },
          {
            id: "CVE-2020-35452",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-35452",
          },
          {
            id: "CVE-2018-1312",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1312",
          },
          {
            id: "CVE-2017-15715",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2017-15715",
          },
          {
            id: "CNVD-2022-03224",
            cvss: "6.8",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-03224",
          },
          {
            id: "8AFB43C5-ABD4-52AD-BB19-24D7884FF2A2",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/8AFB43C5-ABD4-52AD-BB19-24D7884FF2A2",
          },
          {
            id: "4810E2D9-AC5F-5B08-BFB3-DDAFA2F63332",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4810E2D9-AC5F-5B08-BFB3-DDAFA2F63332",
          },
          {
            id: "4373C92A-2755-5538-9C91-0469C995AA9B",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4373C92A-2755-5538-9C91-0469C995AA9B",
          },
          {
            id: "0095E929-7573-5E4A-A7FA-F6598A35E8DE",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/0095E929-7573-5E4A-A7FA-F6598A35E8DE",
          },
          {
            id: "OSV:BIT-2023-31122",
            cvss: "6.4",
            type: "osv",
            is_exploit: "false",
            reference: "https://vulners.com/osv/OSV:BIT-2023-31122",
          },
          {
            id: "CVE-2022-28615",
            cvss: "6.4",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-28615",
          },
          {
            id: "CVE-2021-44224",
            cvss: "6.4",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-44224",
          },
          {
            id: "CVE-2019-10082",
            cvss: "6.4",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10082",
          },
          {
            id: "CVE-2019-0217",
            cvss: "6.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0217",
          },
          {
            id: "CVE-2022-22721",
            cvss: "5.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-22721",
          },
          {
            id: "CVE-2020-1927",
            cvss: "5.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1927",
          },
          {
            id: "CVE-2019-10098",
            cvss: "5.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10098",
          },
          {
            id: "1337DAY-ID-33577",
            cvss: "5.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-33577",
          },
          {
            id: "CVE-2022-36760",
            cvss: "5.1",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-36760",
          },
          {
            id: "OSV:BIT-2023-45802",
            cvss: "5.0",
            type: "osv",
            is_exploit: "false",
            reference: "https://vulners.com/osv/OSV:BIT-2023-45802",
          },
          {
            id: "OSV:BIT-2023-43622",
            cvss: "5.0",
            type: "osv",
            is_exploit: "false",
            reference: "https://vulners.com/osv/OSV:BIT-2023-43622",
          },
          {
            id: "F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
          },
          {
            id: "E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
          },
          {
            id: "DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
          },
          {
            id: "CVE-2022-37436",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-37436",
          },
          {
            id: "CVE-2022-30556",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-30556",
          },
          {
            id: "CVE-2022-29404",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-29404",
          },
          {
            id: "CVE-2022-28614",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-28614",
          },
          {
            id: "CVE-2022-26377",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-26377",
          },
          {
            id: "CVE-2022-22719",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-22719",
          },
          {
            id: "CVE-2021-34798",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-34798",
          },
          {
            id: "CVE-2021-33193",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-33193",
          },
          {
            id: "CVE-2021-26690",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-26690",
          },
          {
            id: "CVE-2020-9490",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-9490",
          },
          {
            id: "CVE-2020-1934",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1934",
          },
          {
            id: "CVE-2019-17567",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-17567",
          },
          {
            id: "CVE-2019-10081",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10081",
          },
          {
            id: "CVE-2019-0220",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0220",
          },
          {
            id: "CVE-2019-0196",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0196",
          },
          {
            id: "CVE-2018-17199",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-17199",
          },
          {
            id: "CVE-2018-17189",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-17189",
          },
          {
            id: "CVE-2018-1333",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1333",
          },
          {
            id: "CVE-2018-1303",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1303",
          },
          {
            id: "CVE-2017-15710",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2017-15710",
          },
          {
            id: "CVE-2006-20001",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2006-20001",
          },
          {
            id: "CNVD-2023-93320",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2023-93320",
          },
          {
            id: "CNVD-2023-80558",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2023-80558",
          },
          {
            id: "CNVD-2022-73122",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-73122",
          },
          {
            id: "CNVD-2022-53584",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-53584",
          },
          {
            id: "CNVD-2022-53582",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-53582",
          },
          {
            id: "CNVD-2022-03223",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-03223",
          },
          {
            id: "C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
          },
          {
            id: "BD3652A9-D066-57BA-9943-4E34970463B9",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/BD3652A9-D066-57BA-9943-4E34970463B9",
          },
          {
            id: "B0208442-6E17-5772-B12D-B5BE30FA5540",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/B0208442-6E17-5772-B12D-B5BE30FA5540",
          },
          {
            id: "A820A056-9F91-5059-B0BC-8D92C7A31A52",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/A820A056-9F91-5059-B0BC-8D92C7A31A52",
          },
          {
            id: "9814661A-35A4-5DB7-BB25-A1040F365C81",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/9814661A-35A4-5DB7-BB25-A1040F365C81",
          },
          {
            id: "17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
          },
          {
            id: "CVE-2020-11993",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-11993",
          },
          {
            id: "CVE-2019-10092",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10092",
          },
          {
            id: "CVE-2018-1302",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1302",
          },
          {
            id: "CVE-2018-1301",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1301",
          },
          {
            id: "CVE-2018-11763",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-11763",
          },
          {
            id: "4013EC74-B3C1-5D95-938A-54197A58586D",
            cvss: "4.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4013EC74-B3C1-5D95-938A-54197A58586D",
          },
          {
            id: "1337DAY-ID-35422",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-35422",
          },
          {
            id: "1337DAY-ID-33575",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-33575",
          },
          {
            id: "CVE-2018-1283",
            cvss: "3.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1283",
          },
          {
            id: "PACKETSTORM:152441",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:152441",
          },
        ],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://115.75.91.61",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8443",
        service_name: "http",
        software: [
          {
            vendor: "Apache httpd",
            product: "Apache httpd",
            version: "2.4.29",
          },
          {
            vendor: "mod_fcgid",
            product: "mod_fcgid",
            version: "2.3.9",
          },
          {
            vendor: "OpenSSL",
            product: "OpenSSL",
            version: "1.1.1g",
          },
        ],
        vulnerabilities: [
          {
            id: "CVE-2019-9517",
            cvss: "7.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-9517",
          },
          {
            id: "PACKETSTORM:171631",
            cvss: "7.5",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:171631",
          },
          {
            id: "EDB-ID:51193",
            cvss: "7.5",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:51193",
          },
          {
            id: "CVE-2022-31813",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-31813",
          },
          {
            id: "CVE-2022-23943",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-23943",
          },
          {
            id: "CVE-2022-22720",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-22720",
          },
          {
            id: "CVE-2021-44790",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-44790",
          },
          {
            id: "CVE-2021-39275",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-39275",
          },
          {
            id: "CVE-2021-26691",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-26691",
          },
          {
            id: "CNVD-2022-73123",
            cvss: "7.5",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-73123",
          },
          {
            id: "CNVD-2022-03225",
            cvss: "7.5",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-03225",
          },
          {
            id: "CNVD-2021-102386",
            cvss: "7.5",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2021-102386",
          },
          {
            id: "1337DAY-ID-38427",
            cvss: "7.5",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-38427",
          },
          {
            id: "EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB",
            cvss: "7.2",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB",
          },
          {
            id: "EDB-ID:46676",
            cvss: "7.2",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:46676",
          },
          {
            id: "CVE-2019-0211",
            cvss: "7.2",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0211",
          },
          {
            id: "1337DAY-ID-32502",
            cvss: "7.2",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-32502",
          },
          {
            id: "FDF3DFA1-ED74-5EE2-BF5C-BA752CA34AE8",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/FDF3DFA1-ED74-5EE2-BF5C-BA752CA34AE8",
          },
          {
            id: "CVE-2021-40438",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-40438",
          },
          {
            id: "CVE-2020-35452",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-35452",
          },
          {
            id: "CVE-2018-1312",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1312",
          },
          {
            id: "CVE-2017-15715",
            cvss: "6.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2017-15715",
          },
          {
            id: "CNVD-2022-03224",
            cvss: "6.8",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-03224",
          },
          {
            id: "8AFB43C5-ABD4-52AD-BB19-24D7884FF2A2",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/8AFB43C5-ABD4-52AD-BB19-24D7884FF2A2",
          },
          {
            id: "4810E2D9-AC5F-5B08-BFB3-DDAFA2F63332",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4810E2D9-AC5F-5B08-BFB3-DDAFA2F63332",
          },
          {
            id: "4373C92A-2755-5538-9C91-0469C995AA9B",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4373C92A-2755-5538-9C91-0469C995AA9B",
          },
          {
            id: "0095E929-7573-5E4A-A7FA-F6598A35E8DE",
            cvss: "6.8",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/0095E929-7573-5E4A-A7FA-F6598A35E8DE",
          },
          {
            id: "OSV:BIT-2023-31122",
            cvss: "6.4",
            type: "osv",
            is_exploit: "false",
            reference: "https://vulners.com/osv/OSV:BIT-2023-31122",
          },
          {
            id: "CVE-2022-28615",
            cvss: "6.4",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-28615",
          },
          {
            id: "CVE-2021-44224",
            cvss: "6.4",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-44224",
          },
          {
            id: "CVE-2019-10082",
            cvss: "6.4",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10082",
          },
          {
            id: "CVE-2019-0217",
            cvss: "6.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0217",
          },
          {
            id: "CVE-2022-22721",
            cvss: "5.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-22721",
          },
          {
            id: "CVE-2020-1927",
            cvss: "5.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1927",
          },
          {
            id: "CVE-2019-10098",
            cvss: "5.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10098",
          },
          {
            id: "1337DAY-ID-33577",
            cvss: "5.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-33577",
          },
          {
            id: "CVE-2022-36760",
            cvss: "5.1",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-36760",
          },
          {
            id: "OSV:BIT-2023-45802",
            cvss: "5.0",
            type: "osv",
            is_exploit: "false",
            reference: "https://vulners.com/osv/OSV:BIT-2023-45802",
          },
          {
            id: "OSV:BIT-2023-43622",
            cvss: "5.0",
            type: "osv",
            is_exploit: "false",
            reference: "https://vulners.com/osv/OSV:BIT-2023-43622",
          },
          {
            id: "F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
          },
          {
            id: "E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
          },
          {
            id: "DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
          },
          {
            id: "CVE-2022-37436",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-37436",
          },
          {
            id: "CVE-2022-30556",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-30556",
          },
          {
            id: "CVE-2022-29404",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-29404",
          },
          {
            id: "CVE-2022-28614",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-28614",
          },
          {
            id: "CVE-2022-26377",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-26377",
          },
          {
            id: "CVE-2022-22719",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-22719",
          },
          {
            id: "CVE-2021-34798",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-34798",
          },
          {
            id: "CVE-2021-33193",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-33193",
          },
          {
            id: "CVE-2021-26690",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-26690",
          },
          {
            id: "CVE-2020-9490",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-9490",
          },
          {
            id: "CVE-2020-1934",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1934",
          },
          {
            id: "CVE-2019-17567",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-17567",
          },
          {
            id: "CVE-2019-10081",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10081",
          },
          {
            id: "CVE-2019-0220",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0220",
          },
          {
            id: "CVE-2019-0196",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-0196",
          },
          {
            id: "CVE-2018-17199",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-17199",
          },
          {
            id: "CVE-2018-17189",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-17189",
          },
          {
            id: "CVE-2018-1333",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1333",
          },
          {
            id: "CVE-2018-1303",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1303",
          },
          {
            id: "CVE-2017-15710",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2017-15710",
          },
          {
            id: "CVE-2006-20001",
            cvss: "5.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2006-20001",
          },
          {
            id: "CNVD-2023-93320",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2023-93320",
          },
          {
            id: "CNVD-2023-80558",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2023-80558",
          },
          {
            id: "CNVD-2022-73122",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-73122",
          },
          {
            id: "CNVD-2022-53584",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-53584",
          },
          {
            id: "CNVD-2022-53582",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-53582",
          },
          {
            id: "CNVD-2022-03223",
            cvss: "5.0",
            type: "cnvd",
            is_exploit: "false",
            reference: "https://vulners.com/cnvd/CNVD-2022-03223",
          },
          {
            id: "C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
          },
          {
            id: "BD3652A9-D066-57BA-9943-4E34970463B9",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/BD3652A9-D066-57BA-9943-4E34970463B9",
          },
          {
            id: "B0208442-6E17-5772-B12D-B5BE30FA5540",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/B0208442-6E17-5772-B12D-B5BE30FA5540",
          },
          {
            id: "A820A056-9F91-5059-B0BC-8D92C7A31A52",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/A820A056-9F91-5059-B0BC-8D92C7A31A52",
          },
          {
            id: "9814661A-35A4-5DB7-BB25-A1040F365C81",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/9814661A-35A4-5DB7-BB25-A1040F365C81",
          },
          {
            id: "17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
          },
          {
            id: "CVE-2020-11993",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-11993",
          },
          {
            id: "CVE-2019-10092",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-10092",
          },
          {
            id: "CVE-2018-1302",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1302",
          },
          {
            id: "CVE-2018-1301",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1301",
          },
          {
            id: "CVE-2018-11763",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-11763",
          },
          {
            id: "4013EC74-B3C1-5D95-938A-54197A58586D",
            cvss: "4.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4013EC74-B3C1-5D95-938A-54197A58586D",
          },
          {
            id: "1337DAY-ID-35422",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-35422",
          },
          {
            id: "1337DAY-ID-33575",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-33575",
          },
          {
            id: "CVE-2018-1283",
            cvss: "3.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2018-1283",
          },
          {
            id: "PACKETSTORM:152441",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:152441",
          },
        ],
      },
    ],
    ssl: [],
    autonomous_system: {
      asn: "AS7552",
      description: "MAINT-VN-VNNIC",
      bgp_prefix: "115.72.0.0/13",
      name: "VIETTEL-VN",
      country_code: "VN",
    },
    operating_system: {
      vendor: "",
      product: "",
    },
    dns: [
      {
        Asset_Name: "antoanthucpham.angiang.gov.vn.",
        Record_type: "A",
        Record: "115.75.91.61",
      },
      {
        Asset_Name: "antoanthucpham.angiang.gov.vn.",
        Record_type: "AAAA",
        Record: "2402:800:63b4:b1c2:215:5dff:fe02:302",
      },
    ],
  },
  {
    domain: "xayenbinh.yenbinh.yenbai.gov.vn",
    discovery_reason: "",
    discovery_on: "2024-09-14 00:33:18",
    ip: "103.42.54.7",
    services: [
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:53",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "53",
        service_name: "domain",
        software: [
          {
            vendor: "",
            product: "",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:443",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "443",
        service_name: "http",
        software: [
          {
            vendor: "nginx",
            product: "nginx",
            version: "1.20.2",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:8001",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8001",
        service_name: "http",
        software: [
          {
            vendor: "Node.js Express framework",
            product: "Node.js Express framework",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:8002",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8002",
        service_name: "http",
        software: [
          {
            vendor: "Microsoft HTTPAPI httpd",
            product: "Microsoft HTTPAPI httpd",
            version: "2.0",
          },
          {
            vendor: "SSDP",
            product: "SSDP",
            version: "UPnP",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:8180",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8180",
        service_name: "http",
        software: [
          {
            vendor: "Apache Tomcat",
            product: "Apache Tomcat",
            version: "8.5.50",
          },
        ],
        vulnerabilities: [
          {
            id: "SSV:92553",
            cvss: "10.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:92553",
          },
          {
            id: "SSV:61553",
            cvss: "10.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61553",
          },
          {
            id: "SSV:2062",
            cvss: "10.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2062",
          },
          {
            id: "PACKETSTORM:125021",
            cvss: "10.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:125021",
          },
          {
            id: "MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_UPLOAD-",
            cvss: "10.0",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_UPLOAD-",
          },
          {
            id: "MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_DEPLOY-",
            cvss: "10.0",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_DEPLOY-",
          },
          {
            id: "MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
            cvss: "10.0",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
          },
          {
            id: "EDB-ID:31433",
            cvss: "10.0",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:31433",
          },
          {
            id: "EDB-ID:16317",
            cvss: "10.0",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:16317",
          },
          {
            id: "95499236-C9FE-56A6-9D7D-E943A24B633A",
            cvss: "10.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/95499236-C9FE-56A6-9D7D-E943A24B633A",
          },
          {
            id: "2C119FFA-ECE0-5E14-A4A4-354A2C38071A",
            cvss: "10.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/2C119FFA-ECE0-5E14-A4A4-354A2C38071A",
          },
          {
            id: "1337DAY-ID-21853",
            cvss: "10.0",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-21853",
          },
          {
            id: "TOMCAT:DCB8C0E7C96DD2367CF48625F7A47EDF",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DCB8C0E7C96DD2367CF48625F7A47EDF",
          },
          {
            id: "TOMCAT:DA27CFA745026609962C185F86E4D285",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DA27CFA745026609962C185F86E4D285",
          },
          {
            id: "TOMCAT:D9EB0EA37A1698F04779A8D08F88C62E",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D9EB0EA37A1698F04779A8D08F88C62E",
          },
          {
            id: "TOMCAT:BE665F9148D024F7474C0628515C3A37",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BE665F9148D024F7474C0628515C3A37",
          },
          {
            id: "TOMCAT:9E43DA1677EA0537439D1A6D19A16EC5",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9E43DA1677EA0537439D1A6D19A16EC5",
          },
          {
            id: "TOMCAT:7FF5C8CC86A7AF5DA33F4B5874774B9B",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7FF5C8CC86A7AF5DA33F4B5874774B9B",
          },
          {
            id: "TOMCAT:604E2DE63F4E10D22151D29C4D2E7487",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:604E2DE63F4E10D22151D29C4D2E7487",
          },
          {
            id: "TOMCAT:5240E60E42AA59815FABAFAFBE8E089C",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5240E60E42AA59815FABAFAFBE8E089C",
          },
          {
            id: "TOMCAT:19DF5AAB3C67D0C43C1BB8ACA9B2D28A",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19DF5AAB3C67D0C43C1BB8ACA9B2D28A",
          },
          {
            id: "TOMCAT:15FF6DF1B5DE765DF9A478C8E8034759",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:15FF6DF1B5DE765DF9A478C8E8034759",
          },
          {
            id: "TOMCAT:15BD868F3B05972CB1A45C65508CE8A7",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:15BD868F3B05972CB1A45C65508CE8A7",
          },
          {
            id: "TOMCAT:0DBA25EA40A6FEBF5FD9039D7F60718E",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0DBA25EA40A6FEBF5FD9039D7F60718E",
          },
          {
            id: "PACKETSTORM:180825",
            cvss: "9.8",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:180825",
          },
          {
            id: "MSF:AUXILIARY-ADMIN-HTTP-TOMCAT_GHOSTCAT-",
            cvss: "9.8",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-ADMIN-HTTP-TOMCAT_GHOSTCAT-",
          },
          {
            id: "CVE-2020-1938",
            cvss: "9.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1938",
          },
          {
            id: "PACKETSTORM:153506",
            cvss: "9.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:153506",
          },
          {
            id: "F3523D8D-36CF-530B-85DD-013275F7D552",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F3523D8D-36CF-530B-85DD-013275F7D552",
          },
          {
            id: "DB8D8364-06FB-55E8-934E-C013B00821B5",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/DB8D8364-06FB-55E8-934E-C013B00821B5",
          },
          {
            id: "C9BC03B4-078B-5F3C-815A-98E0F8AAA33B",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C9BC03B4-078B-5F3C-815A-98E0F8AAA33B",
          },
          {
            id: "3A26C086-A741-585B-8FA9-F90780E2CA16",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/3A26C086-A741-585B-8FA9-F90780E2CA16",
          },
          {
            id: "24B7AC9D-6C5E-545B-97E4-F20711FFCF8F",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/24B7AC9D-6C5E-545B-97E4-F20711FFCF8F",
          },
          {
            id: "1337DAY-ID-32925",
            cvss: "9.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-32925",
          },
          {
            id: "TOMCAT:9847C725903157955C24006319A678BF",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9847C725903157955C24006319A678BF",
          },
          {
            id: "TOMCAT:937E284FF802C2D5A6E9C8A59AB6C822",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:937E284FF802C2D5A6E9C8A59AB6C822",
          },
          {
            id: "TOMCAT:8423D2ED2F8751548B2F3411FE07D05F",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:8423D2ED2F8751548B2F3411FE07D05F",
          },
          {
            id: "TOMCAT:790F7EF00EBD814D5B55BBA9ADFAB91D",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:790F7EF00EBD814D5B55BBA9ADFAB91D",
          },
          {
            id: "TOMCAT:636B29CDD200DF61776C597C016FE492",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:636B29CDD200DF61776C597C016FE492",
          },
          {
            id: "TOMCAT:3BE7322A30732B9FCCD5C138E261173F",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3BE7322A30732B9FCCD5C138E261173F",
          },
          {
            id: "TOMCAT:36D4E191E547319FD3247E3A223857AB",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:36D4E191E547319FD3247E3A223857AB",
          },
          {
            id: "TOMCAT:31F5F7BD3C4EE7FC79E738BF7D1111AB",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:31F5F7BD3C4EE7FC79E738BF7D1111AB",
          },
          {
            id: "EDB-ID:47892",
            cvss: "9.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:47892",
          },
          {
            id: "TOMCAT:F0F8FE52B35B4B90B6C6B9412F88CA1B",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F0F8FE52B35B4B90B6C6B9412F88CA1B",
          },
          {
            id: "TOMCAT:8791F7CDB0177860DFE60DFA1152CCD9",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:8791F7CDB0177860DFE60DFA1152CCD9",
          },
          {
            id: "TOMCAT:1C57B8A512794370194BE52DB897DDB3",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1C57B8A512794370194BE52DB897DDB3",
          },
          {
            id: "TOMCAT:1175049C7D69C5CB1659C6031402BD19",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1175049C7D69C5CB1659C6031402BD19",
          },
          {
            id: "TOMCAT:ECCF6A4DAA30CE7FE974F228B3888E80",
            cvss: "8.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:ECCF6A4DAA30CE7FE974F228B3888E80",
          },
          {
            id: "TOMCAT:58DCB1174EDF5F295BB9030BB80D4F70",
            cvss: "8.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:58DCB1174EDF5F295BB9030BB80D4F70",
          },
          {
            id: "CVE-2022-25762",
            cvss: "8.6",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-25762",
          },
          {
            id: "TOMCAT:E4520A0C2F785FBF22985309FA3E3B08",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E4520A0C2F785FBF22985309FA3E3B08",
          },
          {
            id: "TOMCAT:D72CBF1EC8D17C51BF9944C1A031DFF0",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D72CBF1EC8D17C51BF9944C1A031DFF0",
          },
          {
            id: "TOMCAT:C7559D92C97B679818E34C1ECA3599F0",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C7559D92C97B679818E34C1ECA3599F0",
          },
          {
            id: "TOMCAT:A7D3DCFDE9F8C13D1A85F195595ACE5C",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A7D3DCFDE9F8C13D1A85F195595ACE5C",
          },
          {
            id: "TOMCAT:95E28D1C95DD85DE7ADBDED721C3DA07",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:95E28D1C95DD85DE7ADBDED721C3DA07",
          },
          {
            id: "TOMCAT:7879F42FFEDFDC45DED14974C73D4697",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7879F42FFEDFDC45DED14974C73D4697",
          },
          {
            id: "TOMCAT:5FF617CEB667027ABB70FDFB3A8FFD4C",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5FF617CEB667027ABB70FDFB3A8FFD4C",
          },
          {
            id: "TOMCAT:5322371A63B432FEA04126BDF7D1223B",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5322371A63B432FEA04126BDF7D1223B",
          },
          {
            id: "TOMCAT:36AC55F275AD6FE594625DBE3DFC1A1C",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:36AC55F275AD6FE594625DBE3DFC1A1C",
          },
          {
            id: "MSF:EXPLOIT-WINDOWS-HTTP-TOMCAT_CGI_CMDLINEARGS-",
            cvss: "8.1",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-WINDOWS-HTTP-TOMCAT_CGI_CMDLINEARGS-",
          },
          {
            id: "MSF:EXPLOIT-MULTI-HTTP-TOMCAT_JSP_UPLOAD_BYPASS-",
            cvss: "8.1",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-MULTI-HTTP-TOMCAT_JSP_UPLOAD_BYPASS-",
          },
          {
            id: "EDB-ID:47073",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:47073",
          },
          {
            id: "EDB-ID:43008",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:43008",
          },
          {
            id: "EDB-ID:42966",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:42966",
          },
          {
            id: "EDB-ID:42953",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:42953",
          },
          {
            id: "TOMCAT:A0ABC9DEF20FFFC75FE2C962D481E813",
            cvss: "7.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A0ABC9DEF20FFFC75FE2C962D481E813",
          },
          {
            id: "TOMCAT:7F7A3E46EFAC8D1C471A3C1CB35948A4",
            cvss: "7.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7F7A3E46EFAC8D1C471A3C1CB35948A4",
          },
          {
            id: "TOMCAT:6A4BFE59973660D515D03A0117A1C709",
            cvss: "7.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6A4BFE59973660D515D03A0117A1C709",
          },
          {
            id: "CVE-2020-8022",
            cvss: "7.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8022",
          },
          {
            id: "TOMCAT:F983EF6ACA26D78B69D240D2AFF6ADBF",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F983EF6ACA26D78B69D240D2AFF6ADBF",
          },
          {
            id: "TOMCAT:F732146DF28A05A3F4B1EFE76B3CC81C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F732146DF28A05A3F4B1EFE76B3CC81C",
          },
          {
            id: "TOMCAT:EFE5126874D9D8FC03439FD8E2D254FB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EFE5126874D9D8FC03439FD8E2D254FB",
          },
          {
            id: "TOMCAT:E9A49D97853081D12941EC17E5C2C654",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E9A49D97853081D12941EC17E5C2C654",
          },
          {
            id: "TOMCAT:E76617B2A121AAAE8F7420BCA50A252C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E76617B2A121AAAE8F7420BCA50A252C",
          },
          {
            id: "TOMCAT:E1DC6AFC3CA2A246D554966278B61DC6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E1DC6AFC3CA2A246D554966278B61DC6",
          },
          {
            id: "TOMCAT:E0D7CC4566625A34425D5CE3D847746F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E0D7CC4566625A34425D5CE3D847746F",
          },
          {
            id: "TOMCAT:D9172F74274997DE8AD923344BCECA77",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D9172F74274997DE8AD923344BCECA77",
          },
          {
            id: "TOMCAT:D3D93576ACEA30F0105FC0FE43E2BF2B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D3D93576ACEA30F0105FC0FE43E2BF2B",
          },
          {
            id: "TOMCAT:CCAD5F704056771CAFA7305B5EB8A87E",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CCAD5F704056771CAFA7305B5EB8A87E",
          },
          {
            id: "TOMCAT:CC12043BF61C18AE72DE81C536DB869A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CC12043BF61C18AE72DE81C536DB869A",
          },
          {
            id: "TOMCAT:C878975BAAD7823EE793B63FC6053125",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C878975BAAD7823EE793B63FC6053125",
          },
          {
            id: "TOMCAT:C3F367059A3E9B8636ED41FF901D93F9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C3F367059A3E9B8636ED41FF901D93F9",
          },
          {
            id: "TOMCAT:C3A9DD4DC4BB2C17C62CA8202CF2A834",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C3A9DD4DC4BB2C17C62CA8202CF2A834",
          },
          {
            id: "TOMCAT:BD34F4980E887CDA3F8BAEFAA06BD35B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BD34F4980E887CDA3F8BAEFAA06BD35B",
          },
          {
            id: "TOMCAT:BAAFFB46A35FA23A4961B3B00F383DC9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BAAFFB46A35FA23A4961B3B00F383DC9",
          },
          {
            id: "TOMCAT:BA72E30DC027017AE2F20F86463B2D34",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BA72E30DC027017AE2F20F86463B2D34",
          },
          {
            id: "TOMCAT:B88622256FFB9F8738C56FD059891A1F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B88622256FFB9F8738C56FD059891A1F",
          },
          {
            id: "TOMCAT:B381EB137FE969CF22F68315CBD8CA51",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B381EB137FE969CF22F68315CBD8CA51",
          },
          {
            id: "TOMCAT:B1319C32D6CC051C1213CFD338FD99C3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B1319C32D6CC051C1213CFD338FD99C3",
          },
          {
            id: "TOMCAT:A66B656C929B7FB0E855CBC84E3CC1C3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A66B656C929B7FB0E855CBC84E3CC1C3",
          },
          {
            id: "TOMCAT:A5665B06E2A7BA0C22D9289FA9D00D16",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A5665B06E2A7BA0C22D9289FA9D00D16",
          },
          {
            id: "TOMCAT:A4EF123456883F967199759DC5C9F8F3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A4EF123456883F967199759DC5C9F8F3",
          },
          {
            id: "TOMCAT:A2A41E288752906867E2BBE07542F21C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A2A41E288752906867E2BBE07542F21C",
          },
          {
            id: "TOMCAT:A26CDFA578BA14426FA0BB4B5EC56D6C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A26CDFA578BA14426FA0BB4B5EC56D6C",
          },
          {
            id: "TOMCAT:9ECF11768B6EBC9F08E521F0D05E9017",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9ECF11768B6EBC9F08E521F0D05E9017",
          },
          {
            id: "TOMCAT:9B1DDBF633DAFBB1A5BECFE202020044",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9B1DDBF633DAFBB1A5BECFE202020044",
          },
          {
            id: "TOMCAT:9448B677DEC160C307FA312D4C41A6C1",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9448B677DEC160C307FA312D4C41A6C1",
          },
          {
            id: "TOMCAT:931DBF289AE195F05D621D20FBD78D3C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:931DBF289AE195F05D621D20FBD78D3C",
          },
          {
            id: "TOMCAT:92F4F987FE8115B4DBA99C4C8576C363",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:92F4F987FE8115B4DBA99C4C8576C363",
          },
          {
            id: "TOMCAT:8A2C262DE6E0BAC59E53AD562A9743FE",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:8A2C262DE6E0BAC59E53AD562A9743FE",
          },
          {
            id: "TOMCAT:849CF1402BC4CAFABDA4ED36FA85F4FA",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:849CF1402BC4CAFABDA4ED36FA85F4FA",
          },
          {
            id: "TOMCAT:83EBFA4095E1BC19531C4F80F79B499B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:83EBFA4095E1BC19531C4F80F79B499B",
          },
          {
            id: "TOMCAT:800D297D8266A4359A873DA0DBF5D504",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:800D297D8266A4359A873DA0DBF5D504",
          },
          {
            id: "TOMCAT:7E8B1837DB1B24489FB7CEAE24C18E30",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7E8B1837DB1B24489FB7CEAE24C18E30",
          },
          {
            id: "TOMCAT:7E3DBF853D3232754593B8D1B97F1298",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7E3DBF853D3232754593B8D1B97F1298",
          },
          {
            id: "TOMCAT:72A659F35396F865D9A18EB5614CF486",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:72A659F35396F865D9A18EB5614CF486",
          },
          {
            id: "TOMCAT:720D06DA167834DEDCCF6CCE7DD28826",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:720D06DA167834DEDCCF6CCE7DD28826",
          },
          {
            id: "TOMCAT:7135E612B620B4B1AFDFF60C0C8C72E3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7135E612B620B4B1AFDFF60C0C8C72E3",
          },
          {
            id: "TOMCAT:6FBEE8489C9026E4A9CCF2B0EB583236",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6FBEE8489C9026E4A9CCF2B0EB583236",
          },
          {
            id: "TOMCAT:6DEC4EF5C6B7579A5B719A342881674D",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6DEC4EF5C6B7579A5B719A342881674D",
          },
          {
            id: "TOMCAT:6C76B942203866596C449F47FBCB6A47",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6C76B942203866596C449F47FBCB6A47",
          },
          {
            id: "TOMCAT:6BEAA455226B8F8EE2D08CCDA3BF5EC4",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6BEAA455226B8F8EE2D08CCDA3BF5EC4",
          },
          {
            id: "TOMCAT:6B8125EDA215F510A527D712FEF3FF0A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6B8125EDA215F510A527D712FEF3FF0A",
          },
          {
            id: "TOMCAT:69A8CBA6697F775A25EB731E4EBB8FC9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:69A8CBA6697F775A25EB731E4EBB8FC9",
          },
          {
            id: "TOMCAT:664B7FB043CE1DA3FFE3E5FB72DB8E6D",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:664B7FB043CE1DA3FFE3E5FB72DB8E6D",
          },
          {
            id: "TOMCAT:656BFFE8230CF02C9C933FA9CF6CADDB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:656BFFE8230CF02C9C933FA9CF6CADDB",
          },
          {
            id: "TOMCAT:654D0D4A297658A706D3D4BD62291072",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:654D0D4A297658A706D3D4BD62291072",
          },
          {
            id: "TOMCAT:64ECCFD3FBFA2E22F1F726396EEF5DDB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:64ECCFD3FBFA2E22F1F726396EEF5DDB",
          },
          {
            id: "TOMCAT:629665890ABC7CB3364FCC4F02743773",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:629665890ABC7CB3364FCC4F02743773",
          },
          {
            id: "TOMCAT:61C95A2E406ED797E80D127517613A96",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:61C95A2E406ED797E80D127517613A96",
          },
          {
            id: "TOMCAT:60B7F846069FB29989715E62FE185ECA",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:60B7F846069FB29989715E62FE185ECA",
          },
          {
            id: "TOMCAT:5B8193B87C49AEBA8F7D442FAFA1CDEE",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5B8193B87C49AEBA8F7D442FAFA1CDEE",
          },
          {
            id: "TOMCAT:5AAB17379C1218C128E1FA1C4948CA99",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5AAB17379C1218C128E1FA1C4948CA99",
          },
          {
            id: "TOMCAT:4B7BFADDA44908BC58D9DF4038DB7D7C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4B7BFADDA44908BC58D9DF4038DB7D7C",
          },
          {
            id: "TOMCAT:482CC3622D11CD28A648C34241C398E1",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:482CC3622D11CD28A648C34241C398E1",
          },
          {
            id: "TOMCAT:4660256B3B4BD40947D3F36135BAF1E4",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4660256B3B4BD40947D3F36135BAF1E4",
          },
          {
            id: "TOMCAT:42FCCA1B939943E71978F85565FFC5D2",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:42FCCA1B939943E71978F85565FFC5D2",
          },
          {
            id: "TOMCAT:3EFB0E2EA0199A464EF667E340D1BA91",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3EFB0E2EA0199A464EF667E340D1BA91",
          },
          {
            id: "TOMCAT:3C894B78CB6026265DCB4F6CBB52E528",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3C894B78CB6026265DCB4F6CBB52E528",
          },
          {
            id: "TOMCAT:34D1BB5AAB77A4FA5A232BB1CC1DBE12",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:34D1BB5AAB77A4FA5A232BB1CC1DBE12",
          },
          {
            id: "TOMCAT:3433D97DD68E3E4EE81DAC140FD2AF8F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3433D97DD68E3E4EE81DAC140FD2AF8F",
          },
          {
            id: "TOMCAT:324E50A03961FCE2265C4097A2D9383A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:324E50A03961FCE2265C4097A2D9383A",
          },
          {
            id: "TOMCAT:308C435A018F4613018CC17649FC7EC5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:308C435A018F4613018CC17649FC7EC5",
          },
          {
            id: "TOMCAT:3077CDFB142222B6620BB22B7D921370",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3077CDFB142222B6620BB22B7D921370",
          },
          {
            id: "TOMCAT:2A8B5F1565D6A09E5FAEE407DF69CEDB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2A8B5F1565D6A09E5FAEE407DF69CEDB",
          },
          {
            id: "TOMCAT:297A2EAE99263A165E24C66156B7872A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:297A2EAE99263A165E24C66156B7872A",
          },
          {
            id: "TOMCAT:2105DC8231AA0742A8DB57BA8CF4B530",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2105DC8231AA0742A8DB57BA8CF4B530",
          },
          {
            id: "TOMCAT:1F39B90C2307C93F80215822B99CB2B5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1F39B90C2307C93F80215822B99CB2B5",
          },
          {
            id: "TOMCAT:1EF4CC5C7BF503712F41C55DB6D80BA3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1EF4CC5C7BF503712F41C55DB6D80BA3",
          },
          {
            id: "TOMCAT:1EC0F1D5E7FF84CFCAC4566485FFCAC6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1EC0F1D5E7FF84CFCAC4566485FFCAC6",
          },
          {
            id: "TOMCAT:1E532F98F083E0F3F8106D244A8CAFF6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1E532F98F083E0F3F8106D244A8CAFF6",
          },
          {
            id: "TOMCAT:1CB3810E65438752A9D2B074EFE36CB9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1CB3810E65438752A9D2B074EFE36CB9",
          },
          {
            id: "TOMCAT:1C47C49085ABB474BC344B6C3C40B71E",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1C47C49085ABB474BC344B6C3C40B71E",
          },
          {
            id: "TOMCAT:1ACD2AE0B03FBB401CCE27D5C801BE3B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1ACD2AE0B03FBB401CCE27D5C801BE3B",
          },
          {
            id: "TOMCAT:1A334823720FF53D1F0FD59CB83006C6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1A334823720FF53D1F0FD59CB83006C6",
          },
          {
            id: "TOMCAT:19E9197390C2E44D237B99205DC62313",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19E9197390C2E44D237B99205DC62313",
          },
          {
            id: "TOMCAT:189A39640FA522088C95784425266AF0",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:189A39640FA522088C95784425266AF0",
          },
          {
            id: "TOMCAT:170C5463530016BE51E9DB8856C44B69",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:170C5463530016BE51E9DB8856C44B69",
          },
          {
            id: "TOMCAT:165C7F9BF6E36D02054D811ACE112BB7",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:165C7F9BF6E36D02054D811ACE112BB7",
          },
          {
            id: "TOMCAT:165051AC2BE10A9500B7745CB9AB7C4F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:165051AC2BE10A9500B7745CB9AB7C4F",
          },
          {
            id: "TOMCAT:11C6E48DCBA5EAFD1F9CDDC0358EAA1B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:11C6E48DCBA5EAFD1F9CDDC0358EAA1B",
          },
          {
            id: "TOMCAT:0B64F54283D152613DC4C77D34E010AF",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0B64F54283D152613DC4C77D34E010AF",
          },
          {
            id: "TOMCAT:090D34A8F12561B9A6EBDD358D9AF510",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:090D34A8F12561B9A6EBDD358D9AF510",
          },
          {
            id: "TOMCAT:0771E17F0F0733FEFCB0AD32B094C50F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0771E17F0F0733FEFCB0AD32B094C50F",
          },
          {
            id: "TOMCAT:074E9BEB343F13D4FB2E05E0A5A3F2DC",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:074E9BEB343F13D4FB2E05E0A5A3F2DC",
          },
          {
            id: "TOMCAT:05A191E24B2303184CA1970729C00C81",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:05A191E24B2303184CA1970729C00C81",
          },
          {
            id: "TOMCAT:04B17AC8AF77559DCBF18136C84082B5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:04B17AC8AF77559DCBF18136C84082B5",
          },
          {
            id: "TOMCAT:045D264F03959F4DF2D140C7A3C6A05B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:045D264F03959F4DF2D140C7A3C6A05B",
          },
          {
            id: "TOMCAT:03526B264C3CCDD4C74F8B8FBF02E5E4",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:03526B264C3CCDD4C74F8B8FBF02E5E4",
          },
          {
            id: "TOMCAT:0272BA84012892D369AEA1B59399E0A5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0272BA84012892D369AEA1B59399E0A5",
          },
          {
            id: "SSV:84935",
            cvss: "7.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:84935",
          },
          {
            id: "SSV:61443",
            cvss: "7.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61443",
          },
          {
            id: "SSV:12601",
            cvss: "7.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:12601",
          },
          {
            id: "SAINT:FA41BCBF61DEF78FB3035ECD0A423296",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:FA41BCBF61DEF78FB3035ECD0A423296",
          },
          {
            id: "SAINT:EBB5064D9257E93A49BF25A71D24E1AA",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:EBB5064D9257E93A49BF25A71D24E1AA",
          },
          {
            id: "SAINT:9E88983E6D2E3F9BD58C6DCB531A7E97",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:9E88983E6D2E3F9BD58C6DCB531A7E97",
          },
          {
            id: "SAINT:1E5F50E71375DAEB9F5F859C572CF522",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:1E5F50E71375DAEB9F5F859C572CF522",
          },
          {
            id: "PACKETSTORM:180508",
            cvss: "7.5",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:180508",
          },
          {
            id: "MSF:AUXILIARY-DOS-HTTP-APACHE_COMMONS_FILEUPLOAD_DOS-",
            cvss: "7.5",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-DOS-HTTP-APACHE_COMMONS_FILEUPLOAD_DOS-",
          },
          {
            id: "F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
          },
          {
            id: "EXPLOITPACK:EB000848EE6583FA3B8F33FA4CDD34C0",
            cvss: "7.5",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:EB000848EE6583FA3B8F33FA4CDD34C0",
          },
          {
            id: "EDB-ID:51262",
            cvss: "7.5",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:51262",
          },
          {
            id: "EDB-ID:31615",
            cvss: "7.5",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:31615",
          },
          {
            id: "E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
          },
          {
            id: "DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
          },
          {
            id: "CVE-2024-34750",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2024-34750",
          },
          {
            id: "CVE-2023-46589",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-46589",
          },
          {
            id: "CVE-2023-44487",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-44487",
          },
          {
            id: "CVE-2022-42252",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-42252",
          },
          {
            id: "CVE-2022-29885",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-29885",
          },
          {
            id: "CVE-2021-41079",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-41079",
          },
          {
            id: "CVE-2021-25122",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25122",
          },
          {
            id: "CVE-2020-17527",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-17527",
          },
          {
            id: "CVE-2020-13935",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-13935",
          },
          {
            id: "CVE-2020-13934",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-13934",
          },
          {
            id: "CVE-2020-11996",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-11996",
          },
          {
            id: "C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
          },
          {
            id: "C3759325-98F9-5F0F-98F5-6EAE787CE3FB",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C3759325-98F9-5F0F-98F5-6EAE787CE3FB",
          },
          {
            id: "BFEA664A-42A3-57A8-997C-08119CE73488",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/BFEA664A-42A3-57A8-997C-08119CE73488",
          },
          {
            id: "BD3652A9-D066-57BA-9943-4E34970463B9",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/BD3652A9-D066-57BA-9943-4E34970463B9",
          },
          {
            id: "B0208442-6E17-5772-B12D-B5BE30FA5540",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/B0208442-6E17-5772-B12D-B5BE30FA5540",
          },
          {
            id: "A820A056-9F91-5059-B0BC-8D92C7A31A52",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/A820A056-9F91-5059-B0BC-8D92C7A31A52",
          },
          {
            id: "9814661A-35A4-5DB7-BB25-A1040F365C81",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/9814661A-35A4-5DB7-BB25-A1040F365C81",
          },
          {
            id: "93611D7A-3405-55F6-A543-E1691042CC2D",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/93611D7A-3405-55F6-A543-E1691042CC2D",
          },
          {
            id: "8DB9E338-4180-562E-ABD8-FB97CA704213",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/8DB9E338-4180-562E-ABD8-FB97CA704213",
          },
          {
            id: "85F98E2E-7D50-53DE-9EFC-3BE28E0E8C53",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/85F98E2E-7D50-53DE-9EFC-3BE28E0E8C53",
          },
          {
            id: "848A368C-4CEE-5324-BB29-1432453E3138",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/848A368C-4CEE-5324-BB29-1432453E3138",
          },
          {
            id: "7130E91B-2DF2-565E-ADE8-4C60D45E5A4D",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/7130E91B-2DF2-565E-ADE8-4C60D45E5A4D",
          },
          {
            id: "6E0425A5-AA6D-5FC6-9F8C-415345C30DD5",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/6E0425A5-AA6D-5FC6-9F8C-415345C30DD5",
          },
          {
            id: "5A864BCC-B490-5532-83AB-2E4109BB3C31",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/5A864BCC-B490-5532-83AB-2E4109BB3C31",
          },
          {
            id: "3E0978AA-B510-55A3-A1C8-E122CB347507",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/3E0978AA-B510-55A3-A1C8-E122CB347507",
          },
          {
            id: "17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
          },
          {
            id: "1638D72C-F3EB-52FB-B16F-5F1996A67C0A",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/1638D72C-F3EB-52FB-B16F-5F1996A67C0A",
          },
          {
            id: "140968B5-6F8E-57C6-8A61-831D5FB78836",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/140968B5-6F8E-57C6-8A61-831D5FB78836",
          },
          {
            id: "1337DAY-ID-38495",
            cvss: "7.5",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-38495",
          },
          {
            id: "1337DAY-ID-21887",
            cvss: "7.5",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-21887",
          },
          {
            id: "0B52DD25-4874-54EB-8213-8FA10B0966A3",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/0B52DD25-4874-54EB-8213-8FA10B0966A3",
          },
          {
            id: "EDB-ID:41783",
            cvss: "7.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:41783",
          },
          {
            id: "TOMCAT:F551C8E09F0122E8322CF8CB981AC710",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F551C8E09F0122E8322CF8CB981AC710",
          },
          {
            id: "TOMCAT:EB85C74A2FFEC0BC4964D6CF659D2F1D",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EB85C74A2FFEC0BC4964D6CF659D2F1D",
          },
          {
            id: "TOMCAT:C5537152452B543D3F3B9565BB62CA70",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C5537152452B543D3F3B9565BB62CA70",
          },
          {
            id: "TOMCAT:BD106E970B6D4964B80C5CC3715C6DD2",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BD106E970B6D4964B80C5CC3715C6DD2",
          },
          {
            id: "TOMCAT:A01991EC43D0F6A28E9CB4553C6B4670",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A01991EC43D0F6A28E9CB4553C6B4670",
          },
          {
            id: "TOMCAT:9B658D22C08634C8C17F1EFEE3366D4D",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9B658D22C08634C8C17F1EFEE3366D4D",
          },
          {
            id: "TOMCAT:75BDD1762995663D2613C2EC3D1F16DD",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:75BDD1762995663D2613C2EC3D1F16DD",
          },
          {
            id: "TOMCAT:47B91042927062AB4C945C176AD09B02",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:47B91042927062AB4C945C176AD09B02",
          },
          {
            id: "TOMCAT:38E1DC5950ADDBB8A055F354B172C65E",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:38E1DC5950ADDBB8A055F354B172C65E",
          },
          {
            id: "TOMCAT:36341E62C29FA8D208E5019D7D60DFC8",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:36341E62C29FA8D208E5019D7D60DFC8",
          },
          {
            id: "TOMCAT:134FFF2A5E889835054EC92E557C984D",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:134FFF2A5E889835054EC92E557C984D",
          },
          {
            id: "CVE-2021-25329",
            cvss: "7.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25329",
          },
          {
            id: "CVE-2020-9484",
            cvss: "7.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-9484",
          },
          {
            id: "TOMCAT_FILE_UPLOAD",
            cvss: "6.8",
            type: "canvas",
            is_exploit: "true",
            reference: "https://vulners.com/canvas/TOMCAT_FILE_UPLOAD",
          },
          {
            id: "TOMCAT:A8B130C52ABFF21E7A6B4335E633D4B3",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A8B130C52ABFF21E7A6B4335E633D4B3",
          },
          {
            id: "TOMCAT:7D6CD3E96720C9A9ADA5A59DBEF3B7ED",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7D6CD3E96720C9A9ADA5A59DBEF3B7ED",
          },
          {
            id: "TOMCAT:3CF3641DC8DF18E0CDCD7444E992E18B",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3CF3641DC8DF18E0CDCD7444E992E18B",
          },
          {
            id: "TOMCAT:3AE05A18B72609BB98558765B03067B8",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3AE05A18B72609BB98558765B03067B8",
          },
          {
            id: "TOMCAT:00302244B8EC1609058A7D794F9472C7",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:00302244B8EC1609058A7D794F9472C7",
          },
          {
            id: "SSV:96624",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:96624",
          },
          {
            id: "SSV:96562",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:96562",
          },
          {
            id: "SSV:96557",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:96557",
          },
          {
            id: "SSV:92678",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:92678",
          },
          {
            id: "SSV:60828",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60828",
          },
          {
            id: "PACKETSTORM:144502",
            cvss: "6.8",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:144502",
          },
          {
            id: "EXPLOITPACK:31B3E3F4C5EABC55DF384007CB11320A",
            cvss: "6.8",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:31B3E3F4C5EABC55DF384007CB11320A",
          },
          {
            id: "EXPLOITPACK:28422BD346C315BD9B02E4A18C1B9B0A",
            cvss: "6.8",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:28422BD346C315BD9B02E4A18C1B9B0A",
          },
          {
            id: "EXPLOITPACK:1FA29992905DF6DC8A86680F66930B75",
            cvss: "6.8",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:1FA29992905DF6DC8A86680F66930B75",
          },
          {
            id: "E-627",
            cvss: "6.8",
            type: "dsquare",
            is_exploit: "true",
            reference: "https://vulners.com/dsquare/E-627",
          },
          {
            id: "1337DAY-ID-28780",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-28780",
          },
          {
            id: "1337DAY-ID-28759",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-28759",
          },
          {
            id: "1337DAY-ID-28739",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-28739",
          },
          {
            id: "1337DAY-ID-27485",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-27485",
          },
          {
            id: "TOMCAT:E06724CCDE7336B7E4636921340F1155",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E06724CCDE7336B7E4636921340F1155",
          },
          {
            id: "TOMCAT:B7EB6B23524A2491A4E8200F0D520A47",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B7EB6B23524A2491A4E8200F0D520A47",
          },
          {
            id: "TOMCAT:AD0486867C1A6A6A3190FBD12362991E",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AD0486867C1A6A6A3190FBD12362991E",
          },
          {
            id: "TOMCAT:AAAFF92A877D76F23F91AFEA545747C7",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AAAFF92A877D76F23F91AFEA545747C7",
          },
          {
            id: "TOMCAT:42C9BA0FF681A3FD510F250A50526E04",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:42C9BA0FF681A3FD510F250A50526E04",
          },
          {
            id: "TOMCAT:3CBB1DB49A12E6DB3A2FE5BA90985A75",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3CBB1DB49A12E6DB3A2FE5BA90985A75",
          },
          {
            id: "TOMCAT:3535F2AFC77921EE4AD662129D83A68D",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3535F2AFC77921EE4AD662129D83A68D",
          },
          {
            id: "TOMCAT:2680AEFDC6753CA8A86BDC720F332BF2",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2680AEFDC6753CA8A86BDC720F332BF2",
          },
          {
            id: "CVE-2021-30640",
            cvss: "6.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-30640",
          },
          {
            id: "TOMCAT:FFCE0EAF6F002169ADD22518F9756629",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FFCE0EAF6F002169ADD22518F9756629",
          },
          {
            id: "TOMCAT:EE775FB0489C8488CCA412D4F1D7F36E",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EE775FB0489C8488CCA412D4F1D7F36E",
          },
          {
            id: "TOMCAT:CD22C348F4620666ACC68ACA6AF1EB98",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CD22C348F4620666ACC68ACA6AF1EB98",
          },
          {
            id: "TOMCAT:AC89226F467ACA1B5EE7147D39391784",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AC89226F467ACA1B5EE7147D39391784",
          },
          {
            id: "TOMCAT:6A12F1DA4AE08B48A3DCB3F45989BDE7",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6A12F1DA4AE08B48A3DCB3F45989BDE7",
          },
          {
            id: "TOMCAT:4659DEAC38E318C13712A886F48A7052",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4659DEAC38E318C13712A886F48A7052",
          },
          {
            id: "SSV:2703",
            cvss: "6.4",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2703",
          },
          {
            id: "PACKETSTORM:180512",
            cvss: "6.4",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:180512",
          },
          {
            id: "MSF:AUXILIARY-DOS-HTTP-APACHE_TOMCAT_TRANSFER_ENCODING-",
            cvss: "6.4",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-DOS-HTTP-APACHE_TOMCAT_TRANSFER_ENCODING-",
          },
          {
            id: "TOMCAT:EA34034EAE7C257B79F81648AD70D128",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EA34034EAE7C257B79F81648AD70D128",
          },
          {
            id: "TOMCAT:AF4A6EA17F8CF3DB9FD06E6A4991A066",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AF4A6EA17F8CF3DB9FD06E6A4991A066",
          },
          {
            id: "TOMCAT:AEEBC23F2ADE82A4EDD7A346011A3105",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AEEBC23F2ADE82A4EDD7A346011A3105",
          },
          {
            id: "TOMCAT:A2BE586A0D56A944DBA84632E6A35D4C",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A2BE586A0D56A944DBA84632E6A35D4C",
          },
          {
            id: "TOMCAT:782FA417CAE4494624B3B8A5B6A52D1F",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:782FA417CAE4494624B3B8A5B6A52D1F",
          },
          {
            id: "TOMCAT:53B6E349F00FD73D8D197D64C7C51EF9",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:53B6E349F00FD73D8D197D64C7C51EF9",
          },
          {
            id: "TOMCAT:31B01659C2586B2E4E1DF63BAD060888",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:31B01659C2586B2E4E1DF63BAD060888",
          },
          {
            id: "EDB-ID:50119",
            cvss: "6.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:50119",
          },
          {
            id: "CVE-2023-41080",
            cvss: "6.1",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-41080",
          },
          {
            id: "CVE-2022-34305",
            cvss: "6.1",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-34305",
          },
          {
            id: "TOMCAT:45B79B8310F1BFC7F37B086A2FAD7202",
            cvss: "5.9",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:45B79B8310F1BFC7F37B086A2FAD7202",
          },
          {
            id: "CVE-2021-24122",
            cvss: "5.9",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-24122",
          },
          {
            id: "TOMCAT:DB944B118F9B26AA34A993C1D9DF505F",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DB944B118F9B26AA34A993C1D9DF505F",
          },
          {
            id: "TOMCAT:83FB108AC25AD4A30E9D398A8B370AB9",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:83FB108AC25AD4A30E9D398A8B370AB9",
          },
          {
            id: "TOMCAT:4C0559742ED28D4905A11CC802782CFE",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4C0559742ED28D4905A11CC802782CFE",
          },
          {
            id: "TOMCAT:205164F0DDE6E8C98A7D7D1A06B0C529",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:205164F0DDE6E8C98A7D7D1A06B0C529",
          },
          {
            id: "TOMCAT:17C084F4766F9132988E022F51470E73",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:17C084F4766F9132988E022F51470E73",
          },
          {
            id: "SSV:61595",
            cvss: "5.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61595",
          },
          {
            id: "SSV:61573",
            cvss: "5.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61573",
          },
          {
            id: "SSV:20364",
            cvss: "5.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20364",
          },
          {
            id: "TOMCAT:EB4C199992CB1582B3ABCDFAD324BF0F",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EB4C199992CB1582B3ABCDFAD324BF0F",
          },
          {
            id: "TOMCAT:BEB54B26B2A79FA32196AE2F5F697AFB",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BEB54B26B2A79FA32196AE2F5F697AFB",
          },
          {
            id: "TOMCAT:A0B0592E070D3A4A393867C40FBB81D8",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A0B0592E070D3A4A393867C40FBB81D8",
          },
          {
            id: "TOMCAT:6F3CF30F050AD71F2AA3CBA974714EC9",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6F3CF30F050AD71F2AA3CBA974714EC9",
          },
          {
            id: "TOMCAT:6C657C163FFE0205CE2090ED59CA418E",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6C657C163FFE0205CE2090ED59CA418E",
          },
          {
            id: "TOMCAT:6555A9447DE2DEE3AB45431E51622A5B",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6555A9447DE2DEE3AB45431E51622A5B",
          },
          {
            id: "TOMCAT:3391E0AAF29D2396504D34AA4E6E9211",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3391E0AAF29D2396504D34AA4E6E9211",
          },
          {
            id: "TOMCAT:2D762EB40E337E3D6FB589FA5A78FCC5",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2D762EB40E337E3D6FB589FA5A78FCC5",
          },
          {
            id: "CVE-2024-21733",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2024-21733",
          },
          {
            id: "CVE-2023-45648",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-45648",
          },
          {
            id: "CVE-2023-42795",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-42795",
          },
          {
            id: "CVE-2021-33037",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-33037",
          },
          {
            id: "319866C0-22B8-5734-BAF3-0A4C54957A42",
            cvss: "5.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/319866C0-22B8-5734-BAF3-0A4C54957A42",
          },
          {
            id: "1337DAY-ID-39294",
            cvss: "5.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-39294",
          },
          {
            id: "TOMCAT:DC9BD9085F31543CB380654E610AA381",
            cvss: "5.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DC9BD9085F31543CB380654E610AA381",
          },
          {
            id: "TOMCAT:FF5D663FFA66A4E6C59D9264C0FB02B9",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FF5D663FFA66A4E6C59D9264C0FB02B9",
          },
          {
            id: "TOMCAT:FDED4DC7FD0A2FD3D2AAFA22A540F793",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FDED4DC7FD0A2FD3D2AAFA22A540F793",
          },
          {
            id: "TOMCAT:F9D1631BF59EC0DE3EE07D066675DCBC",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F9D1631BF59EC0DE3EE07D066675DCBC",
          },
          {
            id: "TOMCAT:F487A67EC81D506C39393DA2E9CF2F97",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F487A67EC81D506C39393DA2E9CF2F97",
          },
          {
            id: "TOMCAT:EB733C30CDAC9708C69C7C9AC50385F8",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EB733C30CDAC9708C69C7C9AC50385F8",
          },
          {
            id: "TOMCAT:E093CFBF3DFECC9AFA386072280B1B1B",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E093CFBF3DFECC9AFA386072280B1B1B",
          },
          {
            id: "TOMCAT:DDA47D2AE48AB44423B0931D230E59A2",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DDA47D2AE48AB44423B0931D230E59A2",
          },
          {
            id: "TOMCAT:DA0F02B918514372365112BFE10C2052",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DA0F02B918514372365112BFE10C2052",
          },
          {
            id: "TOMCAT:D6AA2626932E716C44A021C657A15F47",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D6AA2626932E716C44A021C657A15F47",
          },
          {
            id: "TOMCAT:C7E92DB6AF30ED1B3BB2BB1C7E72C1FC",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C7E92DB6AF30ED1B3BB2BB1C7E72C1FC",
          },
          {
            id: "TOMCAT:BC0FE857A2E9AF23349AB773EF935C2B",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BC0FE857A2E9AF23349AB773EF935C2B",
          },
          {
            id: "TOMCAT:B34608AC39E41A48C158DAC3326F86C0",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B34608AC39E41A48C158DAC3326F86C0",
          },
          {
            id: "TOMCAT:AC9AF3D10DBAE18A531119F07C58B416",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AC9AF3D10DBAE18A531119F07C58B416",
          },
          {
            id: "TOMCAT:A98AD8015F0769C8A7E26579E64B5C0C",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A98AD8015F0769C8A7E26579E64B5C0C",
          },
          {
            id: "TOMCAT:A04CFC83C564A6363494472C89AA0A58",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A04CFC83C564A6363494472C89AA0A58",
          },
          {
            id: "TOMCAT:9F74434D476EC57FD6BAD357116860DD",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9F74434D476EC57FD6BAD357116860DD",
          },
          {
            id: "TOMCAT:9699EC7C153B0797E355FBA7FA0F7F6E",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9699EC7C153B0797E355FBA7FA0F7F6E",
          },
          {
            id: "TOMCAT:7860263723E0BE311D5BD108E603D9BF",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7860263723E0BE311D5BD108E603D9BF",
          },
          {
            id: "TOMCAT:5CF1AC4DD8BA54DDC8B420B82C25DBD7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5CF1AC4DD8BA54DDC8B420B82C25DBD7",
          },
          {
            id: "TOMCAT:565F6CBE456BA5297C9079BB2E38BCC5",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:565F6CBE456BA5297C9079BB2E38BCC5",
          },
          {
            id: "TOMCAT:547B225AE62FCCDA83D8A48B9619895F",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:547B225AE62FCCDA83D8A48B9619895F",
          },
          {
            id: "TOMCAT:4E8472224E2361226264CFAA472A44A7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4E8472224E2361226264CFAA472A44A7",
          },
          {
            id: "TOMCAT:3C2EFFD303CA0E5F9DAE3B675F2C2065",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3C2EFFD303CA0E5F9DAE3B675F2C2065",
          },
          {
            id: "TOMCAT:34B8E0132E7832F3AE76A036F797C1D3",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:34B8E0132E7832F3AE76A036F797C1D3",
          },
          {
            id: "TOMCAT:326C10064667ED0D8E44EB1FB191D9B5",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:326C10064667ED0D8E44EB1FB191D9B5",
          },
          {
            id: "TOMCAT:3008DCC76D1D9E4F8A16396F620908CF",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3008DCC76D1D9E4F8A16396F620908CF",
          },
          {
            id: "TOMCAT:2C6F8BC7AC3DF500963E8EB5D522C774",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2C6F8BC7AC3DF500963E8EB5D522C774",
          },
          {
            id: "TOMCAT:1F88AED82411526AE64D4E54A393CB51",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1F88AED82411526AE64D4E54A393CB51",
          },
          {
            id: "TOMCAT:19D7CCD6465D4CC0BF0F6C5167B69AB7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19D7CCD6465D4CC0BF0F6C5167B69AB7",
          },
          {
            id: "TOMCAT:19B8FA4EC945FD0929C4EAC0F08D41F7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19B8FA4EC945FD0929C4EAC0F08D41F7",
          },
          {
            id: "TOMCAT:15CD6728C2514DB3DDC5BB2791C15B30",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:15CD6728C2514DB3DDC5BB2791C15B30",
          },
          {
            id: "TOMCAT:0CCB6AABA904855BA739BBD3E04B3907",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0CCB6AABA904855BA739BBD3E04B3907",
          },
          {
            id: "TOMCAT:069B7EBB4E58EC2D5411D908E561D693",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:069B7EBB4E58EC2D5411D908E561D693",
          },
          {
            id: "TOMCAT:0157002440BA811105303391A35305A9",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0157002440BA811105303391A35305A9",
          },
          {
            id: "SSV:99316",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:99316",
          },
          {
            id: "SSV:92677",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:92677",
          },
          {
            id: "SSV:67058",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:67058",
          },
          {
            id: "SSV:61596",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61596",
          },
          {
            id: "SSV:30076",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:30076",
          },
          {
            id: "SSV:30034",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:30034",
          },
          {
            id: "SSV:30033",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:30033",
          },
          {
            id: "SSV:14334",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:14334",
          },
          {
            id: "SSV:12603",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:12603",
          },
          {
            id: "SSV:11529",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:11529",
          },
          {
            id: "PACKETSTORM:82649",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:82649",
          },
          {
            id: "PACKETSTORM:78169",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:78169",
          },
          {
            id: "PACKETSTORM:55163",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:55163",
          },
          {
            id: "PACKETSTORM:176951",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:176951",
          },
          {
            id: "PACKETSTORM:171728",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:171728",
          },
          {
            id: "PACKETSTORM:155873",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:155873",
          },
          {
            id: "F7C2EA22-B929-56C5-81EC-916AD38EE791",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F7C2EA22-B929-56C5-81EC-916AD38EE791",
          },
          {
            id: "EXPLOITPACK:6FCC90F735198D0FCBF891519B34A910",
            cvss: "5.0",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:6FCC90F735198D0FCBF891519B34A910",
          },
          {
            id: "EXPLOITPACK:093A394113BB59F99F2891210E4279F0",
            cvss: "5.0",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:093A394113BB59F99F2891210E4279F0",
          },
          {
            id: "EDB-ID:10085",
            cvss: "5.0",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:10085",
          },
          {
            id: "E-628",
            cvss: "5.0",
            type: "dsquare",
            is_exploit: "true",
            reference: "https://vulners.com/dsquare/E-628",
          },
          {
            id: "18F5237C-DCAC-5831-AED6-F0880A11DFF2",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/18F5237C-DCAC-5831-AED6-F0880A11DFF2",
          },
          {
            id: "CVE-2020-1935",
            cvss: "4.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1935",
          },
          {
            id: "CVE-2019-17569",
            cvss: "4.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-17569",
          },
          {
            id: "SSV:20861",
            cvss: "4.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20861",
          },
          {
            id: "SSV:11562",
            cvss: "4.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:11562",
          },
          {
            id: "SSV:23184",
            cvss: "4.4",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:23184",
          },
          {
            id: "SSV:20737",
            cvss: "4.4",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20737",
          },
          {
            id: "F60737C1-A24B-51C1-AE8D-73A65C778FFF",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F60737C1-A24B-51C1-AE8D-73A65C778FFF",
          },
          {
            id: "E95D9A0E-E9DE-5D95-9879-E07C0257318C",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E95D9A0E-E9DE-5D95-9879-E07C0257318C",
          },
          {
            id: "D5CBA0E2-A4B0-52CE-B93B-F433CE8662DA",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/D5CBA0E2-A4B0-52CE-B93B-F433CE8662DA",
          },
          {
            id: "C4EDB405-454C-5160-9A99-21A930740C3F",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C4EDB405-454C-5160-9A99-21A930740C3F",
          },
          {
            id: "B0BA17F5-F171-5C97-9F6C-D5F38B5B64F5",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/B0BA17F5-F171-5C97-9F6C-D5F38B5B64F5",
          },
          {
            id: "92CE6110-40F8-5FE5-909B-BE6B59186578",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/92CE6110-40F8-5FE5-909B-BE6B59186578",
          },
          {
            id: "743F51FB-8BF4-5425-AEFA-10B2A14C8F3B",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/743F51FB-8BF4-5425-AEFA-10B2A14C8F3B",
          },
          {
            id: "5602A60A-886A-598C-99B3-EE2E820506AD",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/5602A60A-886A-598C-99B3-EE2E820506AD",
          },
          {
            id: "504D019A-423C-50A0-9677-93192F0ECDFC",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/504D019A-423C-50A0-9677-93192F0ECDFC",
          },
          {
            id: "4278B435-D22E-57E8-ABC4-639BAAFA6FC9",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4278B435-D22E-57E8-ABC4-639BAAFA6FC9",
          },
          {
            id: "25B0D3BA-0039-5AAB-97E1-07A88FE23CC1",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/25B0D3BA-0039-5AAB-97E1-07A88FE23CC1",
          },
          {
            id: "14CD7401-C309-52B2-B4EE-AD54900F0455",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/14CD7401-C309-52B2-B4EE-AD54900F0455",
          },
          {
            id: "TOMCAT:FC12A40DC49D58432E9FA6889FA7EAFC",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FC12A40DC49D58432E9FA6889FA7EAFC",
          },
          {
            id: "TOMCAT:F0049A2F4586A81E86FFD36E3616FCA3",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F0049A2F4586A81E86FFD36E3616FCA3",
          },
          {
            id: "TOMCAT:EF109962CD817D1B323F904D966A1DB0",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EF109962CD817D1B323F904D966A1DB0",
          },
          {
            id: "TOMCAT:EF0934F55497A748BA7FEDD04D64B14F",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EF0934F55497A748BA7FEDD04D64B14F",
          },
          {
            id: "TOMCAT:EE149038DCD9C346AD647A932FC900D5",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EE149038DCD9C346AD647A932FC900D5",
          },
          {
            id: "TOMCAT:ECBBFC6AF9746E5F16035C106F520987",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:ECBBFC6AF9746E5F16035C106F520987",
          },
          {
            id: "TOMCAT:EA4ED950D02D1F036AB2297B7E4A7048",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EA4ED950D02D1F036AB2297B7E4A7048",
          },
          {
            id: "TOMCAT:E79D9E905E19211D175E5D0226367AEA",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E79D9E905E19211D175E5D0226367AEA",
          },
          {
            id: "TOMCAT:E676AE46560F7CF2AF55891ED52C5F15",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E676AE46560F7CF2AF55891ED52C5F15",
          },
          {
            id: "TOMCAT:D896CCA64831D505E12A9E23E56B484A",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D896CCA64831D505E12A9E23E56B484A",
          },
          {
            id: "TOMCAT:D0C233C8F4A89CE9F38AE85B31A58AB3",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D0C233C8F4A89CE9F38AE85B31A58AB3",
          },
          {
            id: "TOMCAT:B8F5059D8B59B7ED231B7109C5F8A6D8",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B8F5059D8B59B7ED231B7109C5F8A6D8",
          },
          {
            id: "TOMCAT:AD034D897FBBD338FED65A9D711BA886",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AD034D897FBBD338FED65A9D711BA886",
          },
          {
            id: "TOMCAT:A9CA732DCFA521DE2F3F29229243BBA2",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A9CA732DCFA521DE2F3F29229243BBA2",
          },
          {
            id: "TOMCAT:9F8F0274D6371091B24411814845511C",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9F8F0274D6371091B24411814845511C",
          },
          {
            id: "TOMCAT:97D3589F45C7020EA75365569675E385",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:97D3589F45C7020EA75365569675E385",
          },
          {
            id: "TOMCAT:9472937DC7D6CA449B23E8770CD44BA2",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9472937DC7D6CA449B23E8770CD44BA2",
          },
          {
            id: "TOMCAT:909935A4BEB7C54CD1FA804D13CDD890",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:909935A4BEB7C54CD1FA804D13CDD890",
          },
          {
            id: "TOMCAT:821F7BD89AAB59FFA98BF04DB2CB99B2",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:821F7BD89AAB59FFA98BF04DB2CB99B2",
          },
          {
            id: "TOMCAT:821BD4F9C3B2B6B4987D4BA9A9211D70",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:821BD4F9C3B2B6B4987D4BA9A9211D70",
          },
          {
            id: "TOMCAT:78606D52CD7CECE336FC03BEC8BAFD03",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:78606D52CD7CECE336FC03BEC8BAFD03",
          },
          {
            id: "TOMCAT:67CE68B320511BF54B324191638E118A",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:67CE68B320511BF54B324191638E118A",
          },
          {
            id: "TOMCAT:4FEF3224A3B841D1683CF58ECA4F4632",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4FEF3224A3B841D1683CF58ECA4F4632",
          },
          {
            id: "TOMCAT:41EDA9889C0948C60EF9755D9067C2EF",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:41EDA9889C0948C60EF9755D9067C2EF",
          },
          {
            id: "TOMCAT:3C400C905C414CA6871D3DB41AFC2979",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3C400C905C414CA6871D3DB41AFC2979",
          },
          {
            id: "TOMCAT:3594E2AFE5FA0E4544AECF1CFE736974",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3594E2AFE5FA0E4544AECF1CFE736974",
          },
          {
            id: "TOMCAT:316BBFD36680C310723B450E67676491",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:316BBFD36680C310723B450E67676491",
          },
          {
            id: "TOMCAT:1CE79F1FB24CB690F26B87530FB0DBF3",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1CE79F1FB24CB690F26B87530FB0DBF3",
          },
          {
            id: "SSV:84482",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:84482",
          },
          {
            id: "SSV:61594",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61594",
          },
          {
            id: "SSV:61593",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61593",
          },
          {
            id: "SSV:60498",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60498",
          },
          {
            id: "SSV:60497",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60497",
          },
          {
            id: "SSV:60407",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60407",
          },
          {
            id: "SSV:4238",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:4238",
          },
          {
            id: "SSV:4199",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:4199",
          },
          {
            id: "SSV:3762",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:3762",
          },
          {
            id: "SSV:3378",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:3378",
          },
          {
            id: "SSV:2154",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2154",
          },
          {
            id: "SSV:2153",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2153",
          },
          {
            id: "SSV:11533",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:11533",
          },
          {
            id: "PACKETSTORM:98176",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:98176",
          },
          {
            id: "PACKETSTORM:75474",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:75474",
          },
          {
            id: "PACKETSTORM:66931",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:66931",
          },
          {
            id: "PACKETSTORM:58554",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:58554",
          },
          {
            id: "PACKETSTORM:57183",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:57183",
          },
          {
            id: "PACKETSTORM:56883",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:56883",
          },
          {
            id: "PACKETSTORM:181053",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:181053",
          },
          {
            id: "PACKETSTORM:163457",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:163457",
          },
          {
            id: "PACKETSTORM:163456",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:163456",
          },
          {
            id: "MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_ENUM-",
            cvss: "4.3",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_ENUM-",
          },
          {
            id: "EXPLOITPACK:5B857ACE0D2D356B9C22F728FA555508",
            cvss: "4.3",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:5B857ACE0D2D356B9C22F728FA555508",
          },
          {
            id: "EDB-ID:50118",
            cvss: "4.3",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:50118",
          },
          {
            id: "EDB-ID:31130",
            cvss: "4.3",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:31130",
          },
          {
            id: "D2SEC_TOMCAT_ENUMUSER",
            cvss: "4.3",
            type: "d2",
            is_exploit: "true",
            reference: "https://vulners.com/d2/D2SEC_TOMCAT_ENUMUSER",
          },
          {
            id: "CVE-2023-28708",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-28708",
          },
          {
            id: "CVE-2020-13943",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-13943",
          },
          {
            id: "1337DAY-ID-36546",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-36546",
          },
          {
            id: "1337DAY-ID-36545",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-36545",
          },
          {
            id: "TOMCAT:EA3D2D7C5F724461ADF487B3F1B37FFE",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EA3D2D7C5F724461ADF487B3F1B37FFE",
          },
          {
            id: "TOMCAT:B5460923270358EAE8BBCD35A7CF1F2D",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B5460923270358EAE8BBCD35A7CF1F2D",
          },
          {
            id: "TOMCAT:714BD411598C43D1A796F94A13DB52B8",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:714BD411598C43D1A796F94A13DB52B8",
          },
          {
            id: "TOMCAT:65DF1688E1F40EE0325BE31BC13EB777",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:65DF1688E1F40EE0325BE31BC13EB777",
          },
          {
            id: "TOMCAT:FBD058D9A4CD0B4D5301142B944CCC45",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FBD058D9A4CD0B4D5301142B944CCC45",
          },
          {
            id: "TOMCAT:C0F3A91E4159E4828BD7AADAC9AC660E",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C0F3A91E4159E4828BD7AADAC9AC660E",
          },
          {
            id: "TOMCAT:666A364CBDFFACBB971313A921FC4EAA",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:666A364CBDFFACBB971313A921FC4EAA",
          },
          {
            id: "TOMCAT:4D17CC9A33E351214CF1DDB80E3259EC",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4D17CC9A33E351214CF1DDB80E3259EC",
          },
          {
            id: "CVE-2021-43980",
            cvss: "3.7",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-43980",
          },
          {
            id: "SSV:2341",
            cvss: "3.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2341",
          },
          {
            id: "TOMCAT:E6740DAF058123DC943997C26451826D",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E6740DAF058123DC943997C26451826D",
          },
          {
            id: "TOMCAT:E3665FADE846A5D9D5081D1755E7F91B",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E3665FADE846A5D9D5081D1755E7F91B",
          },
          {
            id: "TOMCAT:CAB438FBDD760140423C7697D5982A71",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CAB438FBDD760140423C7697D5982A71",
          },
          {
            id: "TOMCAT:6CDE0FF44350468F3A3F350EC3A46C2D",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6CDE0FF44350468F3A3F350EC3A46C2D",
          },
          {
            id: "SSV:68397",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:68397",
          },
          {
            id: "SSV:60787",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60787",
          },
          {
            id: "SSV:4848",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:4848",
          },
          {
            id: "SSV:19510",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:19510",
          },
          {
            id: "SSV:19493",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:19493",
          },
          {
            id: "EXPLOITPACK:B817C3837AAE1BBA6FEB9BABE212CE90",
            cvss: "2.6",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:B817C3837AAE1BBA6FEB9BABE212CE90",
          },
          {
            id: "EDB-ID:12343",
            cvss: "2.6",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:12343",
          },
          {
            id: "TOMCAT:3FAC6BB614BBE0076581BA0B6BB749B1",
            cvss: "1.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3FAC6BB614BBE0076581BA0B6BB749B1",
          },
          {
            id: "SSV:20802",
            cvss: "1.2",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20802",
          },
          {
            id: "TOMCAT:F80CBBC66CE4286D1D9AE52B7FA943BC",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F80CBBC66CE4286D1D9AE52B7FA943BC",
          },
          {
            id: "TOMCAT:A0C1BE19A411D6582E2968BB7DC771B9",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A0C1BE19A411D6582E2968BB7DC771B9",
          },
          {
            id: "TOMCAT:86F4A891B6EAC74A73C41E9C1370EA3F",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:86F4A891B6EAC74A73C41E9C1370EA3F",
          },
          {
            id: "TOMCAT:82BA0DC40ABA6C528A36EA786196208A",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:82BA0DC40ABA6C528A36EA786196208A",
          },
          {
            id: "TOMCAT:1F274D0542D4CC646B037CC0CA3ADE06",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1F274D0542D4CC646B037CC0CA3ADE06",
          },
          {
            id: "SSV:97149",
            cvss: "0.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:97149",
          },
          {
            id: "SSV:60454",
            cvss: "0.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60454",
          },
          {
            id: "PACKETSTORM:144591",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:144591",
          },
          {
            id: "PACKETSTORM:144557",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:144557",
          },
          {
            id: "PACKETSTORM:141920",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:141920",
          },
          {
            id: "E00048F1-1C62-5371-9456-415F8E3DAD66",
            cvss: "0.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E00048F1-1C62-5371-9456-415F8E3DAD66",
          },
        ],
      },
    ],
    ssl: [],
    technology: "tech",
    autonomous_system: {
      asn: "None",
      description: "MAINT-VN-VNNIC",
      bgp_prefix: "None",
      name: "YENBAI-VN",
      country_code: "VN",
    },
    operating_system: {
      vendor: "unknown",
      cpe: "unknown",
      kernel_version: "unknown",
    },
    dns: [
      {
        "Asset Name": "xayenbinh.yenbinh.yenbai.gov.vn.",
        "Record Type": "A",
        Record: "103.42.54.7",
      },
    ],
  },
  {
    domain: "xuanlai.yenbinh.yenbai.gov.vn",
    discovery_reason: "",
    discovery_on: "2024-09-14 02:00:15",
    ip: "103.42.54.7",
    services: [
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:53",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "53",
        service_name: "domain",
        software: [
          {
            vendor: "",
            product: "",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:443",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "443",
        service_name: "http",
        software: [
          {
            vendor: "nginx",
            product: "nginx",
            version: "1.20.2",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:8001",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8001",
        service_name: "http",
        software: [
          {
            vendor: "Node.js Express framework",
            product: "Node.js Express framework",
            version: "",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:8002",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8002",
        service_name: "http",
        software: [
          {
            vendor: "Microsoft HTTPAPI httpd",
            product: "Microsoft HTTPAPI httpd",
            version: "2.0",
          },
          {
            vendor: "SSDP",
            product: "SSDP",
            version: "UPnP",
          },
        ],
        vulnerabilities: [],
      },
      {
        http: {
          request: {
            method: "GET",
            uri: "https://103.42.54.7:8180",
          },
          response: {
            protocol: "HTTP/1.1",
            status_code: "200",
            status_reason: "OK",
            header_location: "",
            html_title: "",
          },
        },
        port: "8180",
        service_name: "http",
        software: [
          {
            vendor: "Apache Tomcat",
            product: "Apache Tomcat",
            version: "8.5.50",
          },
        ],
        vulnerabilities: [
          {
            id: "SSV:92553",
            cvss: "10.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:92553",
          },
          {
            id: "SSV:61553",
            cvss: "10.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61553",
          },
          {
            id: "SSV:2062",
            cvss: "10.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2062",
          },
          {
            id: "PACKETSTORM:125021",
            cvss: "10.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:125021",
          },
          {
            id: "MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_UPLOAD-",
            cvss: "10.0",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_UPLOAD-",
          },
          {
            id: "MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_DEPLOY-",
            cvss: "10.0",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-MULTI-HTTP-TOMCAT_MGR_DEPLOY-",
          },
          {
            id: "MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
            cvss: "10.0",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
          },
          {
            id: "EDB-ID:31433",
            cvss: "10.0",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:31433",
          },
          {
            id: "EDB-ID:16317",
            cvss: "10.0",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:16317",
          },
          {
            id: "95499236-C9FE-56A6-9D7D-E943A24B633A",
            cvss: "10.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/95499236-C9FE-56A6-9D7D-E943A24B633A",
          },
          {
            id: "2C119FFA-ECE0-5E14-A4A4-354A2C38071A",
            cvss: "10.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/2C119FFA-ECE0-5E14-A4A4-354A2C38071A",
          },
          {
            id: "1337DAY-ID-21853",
            cvss: "10.0",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-21853",
          },
          {
            id: "TOMCAT:DCB8C0E7C96DD2367CF48625F7A47EDF",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DCB8C0E7C96DD2367CF48625F7A47EDF",
          },
          {
            id: "TOMCAT:DA27CFA745026609962C185F86E4D285",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DA27CFA745026609962C185F86E4D285",
          },
          {
            id: "TOMCAT:D9EB0EA37A1698F04779A8D08F88C62E",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D9EB0EA37A1698F04779A8D08F88C62E",
          },
          {
            id: "TOMCAT:BE665F9148D024F7474C0628515C3A37",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BE665F9148D024F7474C0628515C3A37",
          },
          {
            id: "TOMCAT:9E43DA1677EA0537439D1A6D19A16EC5",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9E43DA1677EA0537439D1A6D19A16EC5",
          },
          {
            id: "TOMCAT:7FF5C8CC86A7AF5DA33F4B5874774B9B",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7FF5C8CC86A7AF5DA33F4B5874774B9B",
          },
          {
            id: "TOMCAT:604E2DE63F4E10D22151D29C4D2E7487",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:604E2DE63F4E10D22151D29C4D2E7487",
          },
          {
            id: "TOMCAT:5240E60E42AA59815FABAFAFBE8E089C",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5240E60E42AA59815FABAFAFBE8E089C",
          },
          {
            id: "TOMCAT:19DF5AAB3C67D0C43C1BB8ACA9B2D28A",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19DF5AAB3C67D0C43C1BB8ACA9B2D28A",
          },
          {
            id: "TOMCAT:15FF6DF1B5DE765DF9A478C8E8034759",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:15FF6DF1B5DE765DF9A478C8E8034759",
          },
          {
            id: "TOMCAT:15BD868F3B05972CB1A45C65508CE8A7",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:15BD868F3B05972CB1A45C65508CE8A7",
          },
          {
            id: "TOMCAT:0DBA25EA40A6FEBF5FD9039D7F60718E",
            cvss: "9.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0DBA25EA40A6FEBF5FD9039D7F60718E",
          },
          {
            id: "PACKETSTORM:180825",
            cvss: "9.8",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:180825",
          },
          {
            id: "MSF:AUXILIARY-ADMIN-HTTP-TOMCAT_GHOSTCAT-",
            cvss: "9.8",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-ADMIN-HTTP-TOMCAT_GHOSTCAT-",
          },
          {
            id: "CVE-2020-1938",
            cvss: "9.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1938",
          },
          {
            id: "PACKETSTORM:153506",
            cvss: "9.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:153506",
          },
          {
            id: "F3523D8D-36CF-530B-85DD-013275F7D552",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F3523D8D-36CF-530B-85DD-013275F7D552",
          },
          {
            id: "DB8D8364-06FB-55E8-934E-C013B00821B5",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/DB8D8364-06FB-55E8-934E-C013B00821B5",
          },
          {
            id: "C9BC03B4-078B-5F3C-815A-98E0F8AAA33B",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C9BC03B4-078B-5F3C-815A-98E0F8AAA33B",
          },
          {
            id: "3A26C086-A741-585B-8FA9-F90780E2CA16",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/3A26C086-A741-585B-8FA9-F90780E2CA16",
          },
          {
            id: "24B7AC9D-6C5E-545B-97E4-F20711FFCF8F",
            cvss: "9.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/24B7AC9D-6C5E-545B-97E4-F20711FFCF8F",
          },
          {
            id: "1337DAY-ID-32925",
            cvss: "9.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-32925",
          },
          {
            id: "TOMCAT:9847C725903157955C24006319A678BF",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9847C725903157955C24006319A678BF",
          },
          {
            id: "TOMCAT:937E284FF802C2D5A6E9C8A59AB6C822",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:937E284FF802C2D5A6E9C8A59AB6C822",
          },
          {
            id: "TOMCAT:8423D2ED2F8751548B2F3411FE07D05F",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:8423D2ED2F8751548B2F3411FE07D05F",
          },
          {
            id: "TOMCAT:790F7EF00EBD814D5B55BBA9ADFAB91D",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:790F7EF00EBD814D5B55BBA9ADFAB91D",
          },
          {
            id: "TOMCAT:636B29CDD200DF61776C597C016FE492",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:636B29CDD200DF61776C597C016FE492",
          },
          {
            id: "TOMCAT:3BE7322A30732B9FCCD5C138E261173F",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3BE7322A30732B9FCCD5C138E261173F",
          },
          {
            id: "TOMCAT:36D4E191E547319FD3247E3A223857AB",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:36D4E191E547319FD3247E3A223857AB",
          },
          {
            id: "TOMCAT:31F5F7BD3C4EE7FC79E738BF7D1111AB",
            cvss: "9.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:31F5F7BD3C4EE7FC79E738BF7D1111AB",
          },
          {
            id: "EDB-ID:47892",
            cvss: "9.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:47892",
          },
          {
            id: "TOMCAT:F0F8FE52B35B4B90B6C6B9412F88CA1B",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F0F8FE52B35B4B90B6C6B9412F88CA1B",
          },
          {
            id: "TOMCAT:8791F7CDB0177860DFE60DFA1152CCD9",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:8791F7CDB0177860DFE60DFA1152CCD9",
          },
          {
            id: "TOMCAT:1C57B8A512794370194BE52DB897DDB3",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1C57B8A512794370194BE52DB897DDB3",
          },
          {
            id: "TOMCAT:1175049C7D69C5CB1659C6031402BD19",
            cvss: "8.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1175049C7D69C5CB1659C6031402BD19",
          },
          {
            id: "TOMCAT:ECCF6A4DAA30CE7FE974F228B3888E80",
            cvss: "8.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:ECCF6A4DAA30CE7FE974F228B3888E80",
          },
          {
            id: "TOMCAT:58DCB1174EDF5F295BB9030BB80D4F70",
            cvss: "8.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:58DCB1174EDF5F295BB9030BB80D4F70",
          },
          {
            id: "CVE-2022-25762",
            cvss: "8.6",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-25762",
          },
          {
            id: "TOMCAT:E4520A0C2F785FBF22985309FA3E3B08",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E4520A0C2F785FBF22985309FA3E3B08",
          },
          {
            id: "TOMCAT:D72CBF1EC8D17C51BF9944C1A031DFF0",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D72CBF1EC8D17C51BF9944C1A031DFF0",
          },
          {
            id: "TOMCAT:C7559D92C97B679818E34C1ECA3599F0",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C7559D92C97B679818E34C1ECA3599F0",
          },
          {
            id: "TOMCAT:A7D3DCFDE9F8C13D1A85F195595ACE5C",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A7D3DCFDE9F8C13D1A85F195595ACE5C",
          },
          {
            id: "TOMCAT:95E28D1C95DD85DE7ADBDED721C3DA07",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:95E28D1C95DD85DE7ADBDED721C3DA07",
          },
          {
            id: "TOMCAT:7879F42FFEDFDC45DED14974C73D4697",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7879F42FFEDFDC45DED14974C73D4697",
          },
          {
            id: "TOMCAT:5FF617CEB667027ABB70FDFB3A8FFD4C",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5FF617CEB667027ABB70FDFB3A8FFD4C",
          },
          {
            id: "TOMCAT:5322371A63B432FEA04126BDF7D1223B",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5322371A63B432FEA04126BDF7D1223B",
          },
          {
            id: "TOMCAT:36AC55F275AD6FE594625DBE3DFC1A1C",
            cvss: "8.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:36AC55F275AD6FE594625DBE3DFC1A1C",
          },
          {
            id: "MSF:EXPLOIT-WINDOWS-HTTP-TOMCAT_CGI_CMDLINEARGS-",
            cvss: "8.1",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-WINDOWS-HTTP-TOMCAT_CGI_CMDLINEARGS-",
          },
          {
            id: "MSF:EXPLOIT-MULTI-HTTP-TOMCAT_JSP_UPLOAD_BYPASS-",
            cvss: "8.1",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:EXPLOIT-MULTI-HTTP-TOMCAT_JSP_UPLOAD_BYPASS-",
          },
          {
            id: "EDB-ID:47073",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:47073",
          },
          {
            id: "EDB-ID:43008",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:43008",
          },
          {
            id: "EDB-ID:42966",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:42966",
          },
          {
            id: "EDB-ID:42953",
            cvss: "8.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:42953",
          },
          {
            id: "TOMCAT:A0ABC9DEF20FFFC75FE2C962D481E813",
            cvss: "7.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A0ABC9DEF20FFFC75FE2C962D481E813",
          },
          {
            id: "TOMCAT:7F7A3E46EFAC8D1C471A3C1CB35948A4",
            cvss: "7.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7F7A3E46EFAC8D1C471A3C1CB35948A4",
          },
          {
            id: "TOMCAT:6A4BFE59973660D515D03A0117A1C709",
            cvss: "7.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6A4BFE59973660D515D03A0117A1C709",
          },
          {
            id: "CVE-2020-8022",
            cvss: "7.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-8022",
          },
          {
            id: "TOMCAT:F983EF6ACA26D78B69D240D2AFF6ADBF",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F983EF6ACA26D78B69D240D2AFF6ADBF",
          },
          {
            id: "TOMCAT:F732146DF28A05A3F4B1EFE76B3CC81C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F732146DF28A05A3F4B1EFE76B3CC81C",
          },
          {
            id: "TOMCAT:EFE5126874D9D8FC03439FD8E2D254FB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EFE5126874D9D8FC03439FD8E2D254FB",
          },
          {
            id: "TOMCAT:E9A49D97853081D12941EC17E5C2C654",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E9A49D97853081D12941EC17E5C2C654",
          },
          {
            id: "TOMCAT:E76617B2A121AAAE8F7420BCA50A252C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E76617B2A121AAAE8F7420BCA50A252C",
          },
          {
            id: "TOMCAT:E1DC6AFC3CA2A246D554966278B61DC6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E1DC6AFC3CA2A246D554966278B61DC6",
          },
          {
            id: "TOMCAT:E0D7CC4566625A34425D5CE3D847746F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E0D7CC4566625A34425D5CE3D847746F",
          },
          {
            id: "TOMCAT:D9172F74274997DE8AD923344BCECA77",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D9172F74274997DE8AD923344BCECA77",
          },
          {
            id: "TOMCAT:D3D93576ACEA30F0105FC0FE43E2BF2B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D3D93576ACEA30F0105FC0FE43E2BF2B",
          },
          {
            id: "TOMCAT:CCAD5F704056771CAFA7305B5EB8A87E",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CCAD5F704056771CAFA7305B5EB8A87E",
          },
          {
            id: "TOMCAT:CC12043BF61C18AE72DE81C536DB869A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CC12043BF61C18AE72DE81C536DB869A",
          },
          {
            id: "TOMCAT:C878975BAAD7823EE793B63FC6053125",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C878975BAAD7823EE793B63FC6053125",
          },
          {
            id: "TOMCAT:C3F367059A3E9B8636ED41FF901D93F9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C3F367059A3E9B8636ED41FF901D93F9",
          },
          {
            id: "TOMCAT:C3A9DD4DC4BB2C17C62CA8202CF2A834",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C3A9DD4DC4BB2C17C62CA8202CF2A834",
          },
          {
            id: "TOMCAT:BD34F4980E887CDA3F8BAEFAA06BD35B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BD34F4980E887CDA3F8BAEFAA06BD35B",
          },
          {
            id: "TOMCAT:BAAFFB46A35FA23A4961B3B00F383DC9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BAAFFB46A35FA23A4961B3B00F383DC9",
          },
          {
            id: "TOMCAT:BA72E30DC027017AE2F20F86463B2D34",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BA72E30DC027017AE2F20F86463B2D34",
          },
          {
            id: "TOMCAT:B88622256FFB9F8738C56FD059891A1F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B88622256FFB9F8738C56FD059891A1F",
          },
          {
            id: "TOMCAT:B381EB137FE969CF22F68315CBD8CA51",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B381EB137FE969CF22F68315CBD8CA51",
          },
          {
            id: "TOMCAT:B1319C32D6CC051C1213CFD338FD99C3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B1319C32D6CC051C1213CFD338FD99C3",
          },
          {
            id: "TOMCAT:A66B656C929B7FB0E855CBC84E3CC1C3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A66B656C929B7FB0E855CBC84E3CC1C3",
          },
          {
            id: "TOMCAT:A5665B06E2A7BA0C22D9289FA9D00D16",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A5665B06E2A7BA0C22D9289FA9D00D16",
          },
          {
            id: "TOMCAT:A4EF123456883F967199759DC5C9F8F3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A4EF123456883F967199759DC5C9F8F3",
          },
          {
            id: "TOMCAT:A2A41E288752906867E2BBE07542F21C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A2A41E288752906867E2BBE07542F21C",
          },
          {
            id: "TOMCAT:A26CDFA578BA14426FA0BB4B5EC56D6C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A26CDFA578BA14426FA0BB4B5EC56D6C",
          },
          {
            id: "TOMCAT:9ECF11768B6EBC9F08E521F0D05E9017",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9ECF11768B6EBC9F08E521F0D05E9017",
          },
          {
            id: "TOMCAT:9B1DDBF633DAFBB1A5BECFE202020044",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9B1DDBF633DAFBB1A5BECFE202020044",
          },
          {
            id: "TOMCAT:9448B677DEC160C307FA312D4C41A6C1",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9448B677DEC160C307FA312D4C41A6C1",
          },
          {
            id: "TOMCAT:931DBF289AE195F05D621D20FBD78D3C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:931DBF289AE195F05D621D20FBD78D3C",
          },
          {
            id: "TOMCAT:92F4F987FE8115B4DBA99C4C8576C363",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:92F4F987FE8115B4DBA99C4C8576C363",
          },
          {
            id: "TOMCAT:8A2C262DE6E0BAC59E53AD562A9743FE",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:8A2C262DE6E0BAC59E53AD562A9743FE",
          },
          {
            id: "TOMCAT:849CF1402BC4CAFABDA4ED36FA85F4FA",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:849CF1402BC4CAFABDA4ED36FA85F4FA",
          },
          {
            id: "TOMCAT:83EBFA4095E1BC19531C4F80F79B499B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:83EBFA4095E1BC19531C4F80F79B499B",
          },
          {
            id: "TOMCAT:800D297D8266A4359A873DA0DBF5D504",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:800D297D8266A4359A873DA0DBF5D504",
          },
          {
            id: "TOMCAT:7E8B1837DB1B24489FB7CEAE24C18E30",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7E8B1837DB1B24489FB7CEAE24C18E30",
          },
          {
            id: "TOMCAT:7E3DBF853D3232754593B8D1B97F1298",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7E3DBF853D3232754593B8D1B97F1298",
          },
          {
            id: "TOMCAT:72A659F35396F865D9A18EB5614CF486",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:72A659F35396F865D9A18EB5614CF486",
          },
          {
            id: "TOMCAT:720D06DA167834DEDCCF6CCE7DD28826",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:720D06DA167834DEDCCF6CCE7DD28826",
          },
          {
            id: "TOMCAT:7135E612B620B4B1AFDFF60C0C8C72E3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7135E612B620B4B1AFDFF60C0C8C72E3",
          },
          {
            id: "TOMCAT:6FBEE8489C9026E4A9CCF2B0EB583236",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6FBEE8489C9026E4A9CCF2B0EB583236",
          },
          {
            id: "TOMCAT:6DEC4EF5C6B7579A5B719A342881674D",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6DEC4EF5C6B7579A5B719A342881674D",
          },
          {
            id: "TOMCAT:6C76B942203866596C449F47FBCB6A47",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6C76B942203866596C449F47FBCB6A47",
          },
          {
            id: "TOMCAT:6BEAA455226B8F8EE2D08CCDA3BF5EC4",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6BEAA455226B8F8EE2D08CCDA3BF5EC4",
          },
          {
            id: "TOMCAT:6B8125EDA215F510A527D712FEF3FF0A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6B8125EDA215F510A527D712FEF3FF0A",
          },
          {
            id: "TOMCAT:69A8CBA6697F775A25EB731E4EBB8FC9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:69A8CBA6697F775A25EB731E4EBB8FC9",
          },
          {
            id: "TOMCAT:664B7FB043CE1DA3FFE3E5FB72DB8E6D",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:664B7FB043CE1DA3FFE3E5FB72DB8E6D",
          },
          {
            id: "TOMCAT:656BFFE8230CF02C9C933FA9CF6CADDB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:656BFFE8230CF02C9C933FA9CF6CADDB",
          },
          {
            id: "TOMCAT:654D0D4A297658A706D3D4BD62291072",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:654D0D4A297658A706D3D4BD62291072",
          },
          {
            id: "TOMCAT:64ECCFD3FBFA2E22F1F726396EEF5DDB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:64ECCFD3FBFA2E22F1F726396EEF5DDB",
          },
          {
            id: "TOMCAT:629665890ABC7CB3364FCC4F02743773",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:629665890ABC7CB3364FCC4F02743773",
          },
          {
            id: "TOMCAT:61C95A2E406ED797E80D127517613A96",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:61C95A2E406ED797E80D127517613A96",
          },
          {
            id: "TOMCAT:60B7F846069FB29989715E62FE185ECA",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:60B7F846069FB29989715E62FE185ECA",
          },
          {
            id: "TOMCAT:5B8193B87C49AEBA8F7D442FAFA1CDEE",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5B8193B87C49AEBA8F7D442FAFA1CDEE",
          },
          {
            id: "TOMCAT:5AAB17379C1218C128E1FA1C4948CA99",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5AAB17379C1218C128E1FA1C4948CA99",
          },
          {
            id: "TOMCAT:4B7BFADDA44908BC58D9DF4038DB7D7C",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4B7BFADDA44908BC58D9DF4038DB7D7C",
          },
          {
            id: "TOMCAT:482CC3622D11CD28A648C34241C398E1",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:482CC3622D11CD28A648C34241C398E1",
          },
          {
            id: "TOMCAT:4660256B3B4BD40947D3F36135BAF1E4",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4660256B3B4BD40947D3F36135BAF1E4",
          },
          {
            id: "TOMCAT:42FCCA1B939943E71978F85565FFC5D2",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:42FCCA1B939943E71978F85565FFC5D2",
          },
          {
            id: "TOMCAT:3EFB0E2EA0199A464EF667E340D1BA91",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3EFB0E2EA0199A464EF667E340D1BA91",
          },
          {
            id: "TOMCAT:3C894B78CB6026265DCB4F6CBB52E528",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3C894B78CB6026265DCB4F6CBB52E528",
          },
          {
            id: "TOMCAT:34D1BB5AAB77A4FA5A232BB1CC1DBE12",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:34D1BB5AAB77A4FA5A232BB1CC1DBE12",
          },
          {
            id: "TOMCAT:3433D97DD68E3E4EE81DAC140FD2AF8F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3433D97DD68E3E4EE81DAC140FD2AF8F",
          },
          {
            id: "TOMCAT:324E50A03961FCE2265C4097A2D9383A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:324E50A03961FCE2265C4097A2D9383A",
          },
          {
            id: "TOMCAT:308C435A018F4613018CC17649FC7EC5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:308C435A018F4613018CC17649FC7EC5",
          },
          {
            id: "TOMCAT:3077CDFB142222B6620BB22B7D921370",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3077CDFB142222B6620BB22B7D921370",
          },
          {
            id: "TOMCAT:2A8B5F1565D6A09E5FAEE407DF69CEDB",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2A8B5F1565D6A09E5FAEE407DF69CEDB",
          },
          {
            id: "TOMCAT:297A2EAE99263A165E24C66156B7872A",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:297A2EAE99263A165E24C66156B7872A",
          },
          {
            id: "TOMCAT:2105DC8231AA0742A8DB57BA8CF4B530",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2105DC8231AA0742A8DB57BA8CF4B530",
          },
          {
            id: "TOMCAT:1F39B90C2307C93F80215822B99CB2B5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1F39B90C2307C93F80215822B99CB2B5",
          },
          {
            id: "TOMCAT:1EF4CC5C7BF503712F41C55DB6D80BA3",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1EF4CC5C7BF503712F41C55DB6D80BA3",
          },
          {
            id: "TOMCAT:1EC0F1D5E7FF84CFCAC4566485FFCAC6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1EC0F1D5E7FF84CFCAC4566485FFCAC6",
          },
          {
            id: "TOMCAT:1E532F98F083E0F3F8106D244A8CAFF6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1E532F98F083E0F3F8106D244A8CAFF6",
          },
          {
            id: "TOMCAT:1CB3810E65438752A9D2B074EFE36CB9",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1CB3810E65438752A9D2B074EFE36CB9",
          },
          {
            id: "TOMCAT:1C47C49085ABB474BC344B6C3C40B71E",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1C47C49085ABB474BC344B6C3C40B71E",
          },
          {
            id: "TOMCAT:1ACD2AE0B03FBB401CCE27D5C801BE3B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1ACD2AE0B03FBB401CCE27D5C801BE3B",
          },
          {
            id: "TOMCAT:1A334823720FF53D1F0FD59CB83006C6",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1A334823720FF53D1F0FD59CB83006C6",
          },
          {
            id: "TOMCAT:19E9197390C2E44D237B99205DC62313",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19E9197390C2E44D237B99205DC62313",
          },
          {
            id: "TOMCAT:189A39640FA522088C95784425266AF0",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:189A39640FA522088C95784425266AF0",
          },
          {
            id: "TOMCAT:170C5463530016BE51E9DB8856C44B69",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:170C5463530016BE51E9DB8856C44B69",
          },
          {
            id: "TOMCAT:165C7F9BF6E36D02054D811ACE112BB7",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:165C7F9BF6E36D02054D811ACE112BB7",
          },
          {
            id: "TOMCAT:165051AC2BE10A9500B7745CB9AB7C4F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:165051AC2BE10A9500B7745CB9AB7C4F",
          },
          {
            id: "TOMCAT:11C6E48DCBA5EAFD1F9CDDC0358EAA1B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:11C6E48DCBA5EAFD1F9CDDC0358EAA1B",
          },
          {
            id: "TOMCAT:0B64F54283D152613DC4C77D34E010AF",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0B64F54283D152613DC4C77D34E010AF",
          },
          {
            id: "TOMCAT:090D34A8F12561B9A6EBDD358D9AF510",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:090D34A8F12561B9A6EBDD358D9AF510",
          },
          {
            id: "TOMCAT:0771E17F0F0733FEFCB0AD32B094C50F",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0771E17F0F0733FEFCB0AD32B094C50F",
          },
          {
            id: "TOMCAT:074E9BEB343F13D4FB2E05E0A5A3F2DC",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:074E9BEB343F13D4FB2E05E0A5A3F2DC",
          },
          {
            id: "TOMCAT:05A191E24B2303184CA1970729C00C81",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:05A191E24B2303184CA1970729C00C81",
          },
          {
            id: "TOMCAT:04B17AC8AF77559DCBF18136C84082B5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:04B17AC8AF77559DCBF18136C84082B5",
          },
          {
            id: "TOMCAT:045D264F03959F4DF2D140C7A3C6A05B",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:045D264F03959F4DF2D140C7A3C6A05B",
          },
          {
            id: "TOMCAT:03526B264C3CCDD4C74F8B8FBF02E5E4",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:03526B264C3CCDD4C74F8B8FBF02E5E4",
          },
          {
            id: "TOMCAT:0272BA84012892D369AEA1B59399E0A5",
            cvss: "7.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0272BA84012892D369AEA1B59399E0A5",
          },
          {
            id: "SSV:84935",
            cvss: "7.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:84935",
          },
          {
            id: "SSV:61443",
            cvss: "7.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61443",
          },
          {
            id: "SSV:12601",
            cvss: "7.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:12601",
          },
          {
            id: "SAINT:FA41BCBF61DEF78FB3035ECD0A423296",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:FA41BCBF61DEF78FB3035ECD0A423296",
          },
          {
            id: "SAINT:EBB5064D9257E93A49BF25A71D24E1AA",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:EBB5064D9257E93A49BF25A71D24E1AA",
          },
          {
            id: "SAINT:9E88983E6D2E3F9BD58C6DCB531A7E97",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:9E88983E6D2E3F9BD58C6DCB531A7E97",
          },
          {
            id: "SAINT:1E5F50E71375DAEB9F5F859C572CF522",
            cvss: "7.5",
            type: "saint",
            is_exploit: "true",
            reference:
              "https://vulners.com/saint/SAINT:1E5F50E71375DAEB9F5F859C572CF522",
          },
          {
            id: "PACKETSTORM:180508",
            cvss: "7.5",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:180508",
          },
          {
            id: "MSF:AUXILIARY-DOS-HTTP-APACHE_COMMONS_FILEUPLOAD_DOS-",
            cvss: "7.5",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-DOS-HTTP-APACHE_COMMONS_FILEUPLOAD_DOS-",
          },
          {
            id: "F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F7F6E599-CEF4-5E03-8E10-FE18C4101E38",
          },
          {
            id: "EXPLOITPACK:EB000848EE6583FA3B8F33FA4CDD34C0",
            cvss: "7.5",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:EB000848EE6583FA3B8F33FA4CDD34C0",
          },
          {
            id: "EDB-ID:51262",
            cvss: "7.5",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:51262",
          },
          {
            id: "EDB-ID:31615",
            cvss: "7.5",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:31615",
          },
          {
            id: "E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E5C174E5-D6E8-56E0-8403-D287DE52EB3F",
          },
          {
            id: "DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/DB6E1BBD-08B1-574D-A351-7D6BB9898A4A",
          },
          {
            id: "CVE-2024-34750",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2024-34750",
          },
          {
            id: "CVE-2023-46589",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-46589",
          },
          {
            id: "CVE-2023-44487",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-44487",
          },
          {
            id: "CVE-2022-42252",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-42252",
          },
          {
            id: "CVE-2022-29885",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-29885",
          },
          {
            id: "CVE-2021-41079",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-41079",
          },
          {
            id: "CVE-2021-25122",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25122",
          },
          {
            id: "CVE-2020-17527",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-17527",
          },
          {
            id: "CVE-2020-13935",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-13935",
          },
          {
            id: "CVE-2020-13934",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-13934",
          },
          {
            id: "CVE-2020-11996",
            cvss: "7.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-11996",
          },
          {
            id: "C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C9A1C0C1-B6E3-5955-A4F1-DEA0E505B14B",
          },
          {
            id: "C3759325-98F9-5F0F-98F5-6EAE787CE3FB",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C3759325-98F9-5F0F-98F5-6EAE787CE3FB",
          },
          {
            id: "BFEA664A-42A3-57A8-997C-08119CE73488",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/BFEA664A-42A3-57A8-997C-08119CE73488",
          },
          {
            id: "BD3652A9-D066-57BA-9943-4E34970463B9",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/BD3652A9-D066-57BA-9943-4E34970463B9",
          },
          {
            id: "B0208442-6E17-5772-B12D-B5BE30FA5540",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/B0208442-6E17-5772-B12D-B5BE30FA5540",
          },
          {
            id: "A820A056-9F91-5059-B0BC-8D92C7A31A52",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/A820A056-9F91-5059-B0BC-8D92C7A31A52",
          },
          {
            id: "9814661A-35A4-5DB7-BB25-A1040F365C81",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/9814661A-35A4-5DB7-BB25-A1040F365C81",
          },
          {
            id: "93611D7A-3405-55F6-A543-E1691042CC2D",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/93611D7A-3405-55F6-A543-E1691042CC2D",
          },
          {
            id: "8DB9E338-4180-562E-ABD8-FB97CA704213",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/8DB9E338-4180-562E-ABD8-FB97CA704213",
          },
          {
            id: "85F98E2E-7D50-53DE-9EFC-3BE28E0E8C53",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/85F98E2E-7D50-53DE-9EFC-3BE28E0E8C53",
          },
          {
            id: "848A368C-4CEE-5324-BB29-1432453E3138",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/848A368C-4CEE-5324-BB29-1432453E3138",
          },
          {
            id: "7130E91B-2DF2-565E-ADE8-4C60D45E5A4D",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/7130E91B-2DF2-565E-ADE8-4C60D45E5A4D",
          },
          {
            id: "6E0425A5-AA6D-5FC6-9F8C-415345C30DD5",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/6E0425A5-AA6D-5FC6-9F8C-415345C30DD5",
          },
          {
            id: "5A864BCC-B490-5532-83AB-2E4109BB3C31",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/5A864BCC-B490-5532-83AB-2E4109BB3C31",
          },
          {
            id: "3E0978AA-B510-55A3-A1C8-E122CB347507",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/3E0978AA-B510-55A3-A1C8-E122CB347507",
          },
          {
            id: "17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/17C6AD2A-8469-56C8-BBBE-1764D0DF1680",
          },
          {
            id: "1638D72C-F3EB-52FB-B16F-5F1996A67C0A",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/1638D72C-F3EB-52FB-B16F-5F1996A67C0A",
          },
          {
            id: "140968B5-6F8E-57C6-8A61-831D5FB78836",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/140968B5-6F8E-57C6-8A61-831D5FB78836",
          },
          {
            id: "1337DAY-ID-38495",
            cvss: "7.5",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-38495",
          },
          {
            id: "1337DAY-ID-21887",
            cvss: "7.5",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-21887",
          },
          {
            id: "0B52DD25-4874-54EB-8213-8FA10B0966A3",
            cvss: "7.5",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/0B52DD25-4874-54EB-8213-8FA10B0966A3",
          },
          {
            id: "EDB-ID:41783",
            cvss: "7.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:41783",
          },
          {
            id: "TOMCAT:F551C8E09F0122E8322CF8CB981AC710",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F551C8E09F0122E8322CF8CB981AC710",
          },
          {
            id: "TOMCAT:EB85C74A2FFEC0BC4964D6CF659D2F1D",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EB85C74A2FFEC0BC4964D6CF659D2F1D",
          },
          {
            id: "TOMCAT:C5537152452B543D3F3B9565BB62CA70",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C5537152452B543D3F3B9565BB62CA70",
          },
          {
            id: "TOMCAT:BD106E970B6D4964B80C5CC3715C6DD2",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BD106E970B6D4964B80C5CC3715C6DD2",
          },
          {
            id: "TOMCAT:A01991EC43D0F6A28E9CB4553C6B4670",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A01991EC43D0F6A28E9CB4553C6B4670",
          },
          {
            id: "TOMCAT:9B658D22C08634C8C17F1EFEE3366D4D",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9B658D22C08634C8C17F1EFEE3366D4D",
          },
          {
            id: "TOMCAT:75BDD1762995663D2613C2EC3D1F16DD",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:75BDD1762995663D2613C2EC3D1F16DD",
          },
          {
            id: "TOMCAT:47B91042927062AB4C945C176AD09B02",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:47B91042927062AB4C945C176AD09B02",
          },
          {
            id: "TOMCAT:38E1DC5950ADDBB8A055F354B172C65E",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:38E1DC5950ADDBB8A055F354B172C65E",
          },
          {
            id: "TOMCAT:36341E62C29FA8D208E5019D7D60DFC8",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:36341E62C29FA8D208E5019D7D60DFC8",
          },
          {
            id: "TOMCAT:134FFF2A5E889835054EC92E557C984D",
            cvss: "7.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:134FFF2A5E889835054EC92E557C984D",
          },
          {
            id: "CVE-2021-25329",
            cvss: "7.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-25329",
          },
          {
            id: "CVE-2020-9484",
            cvss: "7.0",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-9484",
          },
          {
            id: "TOMCAT_FILE_UPLOAD",
            cvss: "6.8",
            type: "canvas",
            is_exploit: "true",
            reference: "https://vulners.com/canvas/TOMCAT_FILE_UPLOAD",
          },
          {
            id: "TOMCAT:A8B130C52ABFF21E7A6B4335E633D4B3",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A8B130C52ABFF21E7A6B4335E633D4B3",
          },
          {
            id: "TOMCAT:7D6CD3E96720C9A9ADA5A59DBEF3B7ED",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7D6CD3E96720C9A9ADA5A59DBEF3B7ED",
          },
          {
            id: "TOMCAT:3CF3641DC8DF18E0CDCD7444E992E18B",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3CF3641DC8DF18E0CDCD7444E992E18B",
          },
          {
            id: "TOMCAT:3AE05A18B72609BB98558765B03067B8",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3AE05A18B72609BB98558765B03067B8",
          },
          {
            id: "TOMCAT:00302244B8EC1609058A7D794F9472C7",
            cvss: "6.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:00302244B8EC1609058A7D794F9472C7",
          },
          {
            id: "SSV:96624",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:96624",
          },
          {
            id: "SSV:96562",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:96562",
          },
          {
            id: "SSV:96557",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:96557",
          },
          {
            id: "SSV:92678",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:92678",
          },
          {
            id: "SSV:60828",
            cvss: "6.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60828",
          },
          {
            id: "PACKETSTORM:144502",
            cvss: "6.8",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:144502",
          },
          {
            id: "EXPLOITPACK:31B3E3F4C5EABC55DF384007CB11320A",
            cvss: "6.8",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:31B3E3F4C5EABC55DF384007CB11320A",
          },
          {
            id: "EXPLOITPACK:28422BD346C315BD9B02E4A18C1B9B0A",
            cvss: "6.8",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:28422BD346C315BD9B02E4A18C1B9B0A",
          },
          {
            id: "EXPLOITPACK:1FA29992905DF6DC8A86680F66930B75",
            cvss: "6.8",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:1FA29992905DF6DC8A86680F66930B75",
          },
          {
            id: "E-627",
            cvss: "6.8",
            type: "dsquare",
            is_exploit: "true",
            reference: "https://vulners.com/dsquare/E-627",
          },
          {
            id: "1337DAY-ID-28780",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-28780",
          },
          {
            id: "1337DAY-ID-28759",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-28759",
          },
          {
            id: "1337DAY-ID-28739",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-28739",
          },
          {
            id: "1337DAY-ID-27485",
            cvss: "6.8",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-27485",
          },
          {
            id: "TOMCAT:E06724CCDE7336B7E4636921340F1155",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E06724CCDE7336B7E4636921340F1155",
          },
          {
            id: "TOMCAT:B7EB6B23524A2491A4E8200F0D520A47",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B7EB6B23524A2491A4E8200F0D520A47",
          },
          {
            id: "TOMCAT:AD0486867C1A6A6A3190FBD12362991E",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AD0486867C1A6A6A3190FBD12362991E",
          },
          {
            id: "TOMCAT:AAAFF92A877D76F23F91AFEA545747C7",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AAAFF92A877D76F23F91AFEA545747C7",
          },
          {
            id: "TOMCAT:42C9BA0FF681A3FD510F250A50526E04",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:42C9BA0FF681A3FD510F250A50526E04",
          },
          {
            id: "TOMCAT:3CBB1DB49A12E6DB3A2FE5BA90985A75",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3CBB1DB49A12E6DB3A2FE5BA90985A75",
          },
          {
            id: "TOMCAT:3535F2AFC77921EE4AD662129D83A68D",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3535F2AFC77921EE4AD662129D83A68D",
          },
          {
            id: "TOMCAT:2680AEFDC6753CA8A86BDC720F332BF2",
            cvss: "6.5",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2680AEFDC6753CA8A86BDC720F332BF2",
          },
          {
            id: "CVE-2021-30640",
            cvss: "6.5",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-30640",
          },
          {
            id: "TOMCAT:FFCE0EAF6F002169ADD22518F9756629",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FFCE0EAF6F002169ADD22518F9756629",
          },
          {
            id: "TOMCAT:EE775FB0489C8488CCA412D4F1D7F36E",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EE775FB0489C8488CCA412D4F1D7F36E",
          },
          {
            id: "TOMCAT:CD22C348F4620666ACC68ACA6AF1EB98",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CD22C348F4620666ACC68ACA6AF1EB98",
          },
          {
            id: "TOMCAT:AC89226F467ACA1B5EE7147D39391784",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AC89226F467ACA1B5EE7147D39391784",
          },
          {
            id: "TOMCAT:6A12F1DA4AE08B48A3DCB3F45989BDE7",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6A12F1DA4AE08B48A3DCB3F45989BDE7",
          },
          {
            id: "TOMCAT:4659DEAC38E318C13712A886F48A7052",
            cvss: "6.4",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4659DEAC38E318C13712A886F48A7052",
          },
          {
            id: "SSV:2703",
            cvss: "6.4",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2703",
          },
          {
            id: "PACKETSTORM:180512",
            cvss: "6.4",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:180512",
          },
          {
            id: "MSF:AUXILIARY-DOS-HTTP-APACHE_TOMCAT_TRANSFER_ENCODING-",
            cvss: "6.4",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-DOS-HTTP-APACHE_TOMCAT_TRANSFER_ENCODING-",
          },
          {
            id: "TOMCAT:EA34034EAE7C257B79F81648AD70D128",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EA34034EAE7C257B79F81648AD70D128",
          },
          {
            id: "TOMCAT:AF4A6EA17F8CF3DB9FD06E6A4991A066",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AF4A6EA17F8CF3DB9FD06E6A4991A066",
          },
          {
            id: "TOMCAT:AEEBC23F2ADE82A4EDD7A346011A3105",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AEEBC23F2ADE82A4EDD7A346011A3105",
          },
          {
            id: "TOMCAT:A2BE586A0D56A944DBA84632E6A35D4C",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A2BE586A0D56A944DBA84632E6A35D4C",
          },
          {
            id: "TOMCAT:782FA417CAE4494624B3B8A5B6A52D1F",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:782FA417CAE4494624B3B8A5B6A52D1F",
          },
          {
            id: "TOMCAT:53B6E349F00FD73D8D197D64C7C51EF9",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:53B6E349F00FD73D8D197D64C7C51EF9",
          },
          {
            id: "TOMCAT:31B01659C2586B2E4E1DF63BAD060888",
            cvss: "6.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:31B01659C2586B2E4E1DF63BAD060888",
          },
          {
            id: "EDB-ID:50119",
            cvss: "6.1",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:50119",
          },
          {
            id: "CVE-2023-41080",
            cvss: "6.1",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-41080",
          },
          {
            id: "CVE-2022-34305",
            cvss: "6.1",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2022-34305",
          },
          {
            id: "TOMCAT:45B79B8310F1BFC7F37B086A2FAD7202",
            cvss: "5.9",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:45B79B8310F1BFC7F37B086A2FAD7202",
          },
          {
            id: "CVE-2021-24122",
            cvss: "5.9",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-24122",
          },
          {
            id: "TOMCAT:DB944B118F9B26AA34A993C1D9DF505F",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DB944B118F9B26AA34A993C1D9DF505F",
          },
          {
            id: "TOMCAT:83FB108AC25AD4A30E9D398A8B370AB9",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:83FB108AC25AD4A30E9D398A8B370AB9",
          },
          {
            id: "TOMCAT:4C0559742ED28D4905A11CC802782CFE",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4C0559742ED28D4905A11CC802782CFE",
          },
          {
            id: "TOMCAT:205164F0DDE6E8C98A7D7D1A06B0C529",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:205164F0DDE6E8C98A7D7D1A06B0C529",
          },
          {
            id: "TOMCAT:17C084F4766F9132988E022F51470E73",
            cvss: "5.8",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:17C084F4766F9132988E022F51470E73",
          },
          {
            id: "SSV:61595",
            cvss: "5.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61595",
          },
          {
            id: "SSV:61573",
            cvss: "5.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61573",
          },
          {
            id: "SSV:20364",
            cvss: "5.8",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20364",
          },
          {
            id: "TOMCAT:EB4C199992CB1582B3ABCDFAD324BF0F",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EB4C199992CB1582B3ABCDFAD324BF0F",
          },
          {
            id: "TOMCAT:BEB54B26B2A79FA32196AE2F5F697AFB",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BEB54B26B2A79FA32196AE2F5F697AFB",
          },
          {
            id: "TOMCAT:A0B0592E070D3A4A393867C40FBB81D8",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A0B0592E070D3A4A393867C40FBB81D8",
          },
          {
            id: "TOMCAT:6F3CF30F050AD71F2AA3CBA974714EC9",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6F3CF30F050AD71F2AA3CBA974714EC9",
          },
          {
            id: "TOMCAT:6C657C163FFE0205CE2090ED59CA418E",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6C657C163FFE0205CE2090ED59CA418E",
          },
          {
            id: "TOMCAT:6555A9447DE2DEE3AB45431E51622A5B",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6555A9447DE2DEE3AB45431E51622A5B",
          },
          {
            id: "TOMCAT:3391E0AAF29D2396504D34AA4E6E9211",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3391E0AAF29D2396504D34AA4E6E9211",
          },
          {
            id: "TOMCAT:2D762EB40E337E3D6FB589FA5A78FCC5",
            cvss: "5.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2D762EB40E337E3D6FB589FA5A78FCC5",
          },
          {
            id: "CVE-2024-21733",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2024-21733",
          },
          {
            id: "CVE-2023-45648",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-45648",
          },
          {
            id: "CVE-2023-42795",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-42795",
          },
          {
            id: "CVE-2021-33037",
            cvss: "5.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-33037",
          },
          {
            id: "319866C0-22B8-5734-BAF3-0A4C54957A42",
            cvss: "5.3",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/319866C0-22B8-5734-BAF3-0A4C54957A42",
          },
          {
            id: "1337DAY-ID-39294",
            cvss: "5.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-39294",
          },
          {
            id: "TOMCAT:DC9BD9085F31543CB380654E610AA381",
            cvss: "5.1",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DC9BD9085F31543CB380654E610AA381",
          },
          {
            id: "TOMCAT:FF5D663FFA66A4E6C59D9264C0FB02B9",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FF5D663FFA66A4E6C59D9264C0FB02B9",
          },
          {
            id: "TOMCAT:FDED4DC7FD0A2FD3D2AAFA22A540F793",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FDED4DC7FD0A2FD3D2AAFA22A540F793",
          },
          {
            id: "TOMCAT:F9D1631BF59EC0DE3EE07D066675DCBC",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F9D1631BF59EC0DE3EE07D066675DCBC",
          },
          {
            id: "TOMCAT:F487A67EC81D506C39393DA2E9CF2F97",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F487A67EC81D506C39393DA2E9CF2F97",
          },
          {
            id: "TOMCAT:EB733C30CDAC9708C69C7C9AC50385F8",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EB733C30CDAC9708C69C7C9AC50385F8",
          },
          {
            id: "TOMCAT:E093CFBF3DFECC9AFA386072280B1B1B",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E093CFBF3DFECC9AFA386072280B1B1B",
          },
          {
            id: "TOMCAT:DDA47D2AE48AB44423B0931D230E59A2",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DDA47D2AE48AB44423B0931D230E59A2",
          },
          {
            id: "TOMCAT:DA0F02B918514372365112BFE10C2052",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:DA0F02B918514372365112BFE10C2052",
          },
          {
            id: "TOMCAT:D6AA2626932E716C44A021C657A15F47",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D6AA2626932E716C44A021C657A15F47",
          },
          {
            id: "TOMCAT:C7E92DB6AF30ED1B3BB2BB1C7E72C1FC",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C7E92DB6AF30ED1B3BB2BB1C7E72C1FC",
          },
          {
            id: "TOMCAT:BC0FE857A2E9AF23349AB773EF935C2B",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:BC0FE857A2E9AF23349AB773EF935C2B",
          },
          {
            id: "TOMCAT:B34608AC39E41A48C158DAC3326F86C0",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B34608AC39E41A48C158DAC3326F86C0",
          },
          {
            id: "TOMCAT:AC9AF3D10DBAE18A531119F07C58B416",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AC9AF3D10DBAE18A531119F07C58B416",
          },
          {
            id: "TOMCAT:A98AD8015F0769C8A7E26579E64B5C0C",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A98AD8015F0769C8A7E26579E64B5C0C",
          },
          {
            id: "TOMCAT:A04CFC83C564A6363494472C89AA0A58",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A04CFC83C564A6363494472C89AA0A58",
          },
          {
            id: "TOMCAT:9F74434D476EC57FD6BAD357116860DD",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9F74434D476EC57FD6BAD357116860DD",
          },
          {
            id: "TOMCAT:9699EC7C153B0797E355FBA7FA0F7F6E",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9699EC7C153B0797E355FBA7FA0F7F6E",
          },
          {
            id: "TOMCAT:7860263723E0BE311D5BD108E603D9BF",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:7860263723E0BE311D5BD108E603D9BF",
          },
          {
            id: "TOMCAT:5CF1AC4DD8BA54DDC8B420B82C25DBD7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:5CF1AC4DD8BA54DDC8B420B82C25DBD7",
          },
          {
            id: "TOMCAT:565F6CBE456BA5297C9079BB2E38BCC5",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:565F6CBE456BA5297C9079BB2E38BCC5",
          },
          {
            id: "TOMCAT:547B225AE62FCCDA83D8A48B9619895F",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:547B225AE62FCCDA83D8A48B9619895F",
          },
          {
            id: "TOMCAT:4E8472224E2361226264CFAA472A44A7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4E8472224E2361226264CFAA472A44A7",
          },
          {
            id: "TOMCAT:3C2EFFD303CA0E5F9DAE3B675F2C2065",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3C2EFFD303CA0E5F9DAE3B675F2C2065",
          },
          {
            id: "TOMCAT:34B8E0132E7832F3AE76A036F797C1D3",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:34B8E0132E7832F3AE76A036F797C1D3",
          },
          {
            id: "TOMCAT:326C10064667ED0D8E44EB1FB191D9B5",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:326C10064667ED0D8E44EB1FB191D9B5",
          },
          {
            id: "TOMCAT:3008DCC76D1D9E4F8A16396F620908CF",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3008DCC76D1D9E4F8A16396F620908CF",
          },
          {
            id: "TOMCAT:2C6F8BC7AC3DF500963E8EB5D522C774",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:2C6F8BC7AC3DF500963E8EB5D522C774",
          },
          {
            id: "TOMCAT:1F88AED82411526AE64D4E54A393CB51",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1F88AED82411526AE64D4E54A393CB51",
          },
          {
            id: "TOMCAT:19D7CCD6465D4CC0BF0F6C5167B69AB7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19D7CCD6465D4CC0BF0F6C5167B69AB7",
          },
          {
            id: "TOMCAT:19B8FA4EC945FD0929C4EAC0F08D41F7",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:19B8FA4EC945FD0929C4EAC0F08D41F7",
          },
          {
            id: "TOMCAT:15CD6728C2514DB3DDC5BB2791C15B30",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:15CD6728C2514DB3DDC5BB2791C15B30",
          },
          {
            id: "TOMCAT:0CCB6AABA904855BA739BBD3E04B3907",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0CCB6AABA904855BA739BBD3E04B3907",
          },
          {
            id: "TOMCAT:069B7EBB4E58EC2D5411D908E561D693",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:069B7EBB4E58EC2D5411D908E561D693",
          },
          {
            id: "TOMCAT:0157002440BA811105303391A35305A9",
            cvss: "5.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:0157002440BA811105303391A35305A9",
          },
          {
            id: "SSV:99316",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:99316",
          },
          {
            id: "SSV:92677",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:92677",
          },
          {
            id: "SSV:67058",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:67058",
          },
          {
            id: "SSV:61596",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61596",
          },
          {
            id: "SSV:30076",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:30076",
          },
          {
            id: "SSV:30034",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:30034",
          },
          {
            id: "SSV:30033",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:30033",
          },
          {
            id: "SSV:14334",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:14334",
          },
          {
            id: "SSV:12603",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:12603",
          },
          {
            id: "SSV:11529",
            cvss: "5.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:11529",
          },
          {
            id: "PACKETSTORM:82649",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:82649",
          },
          {
            id: "PACKETSTORM:78169",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:78169",
          },
          {
            id: "PACKETSTORM:55163",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:55163",
          },
          {
            id: "PACKETSTORM:176951",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:176951",
          },
          {
            id: "PACKETSTORM:171728",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:171728",
          },
          {
            id: "PACKETSTORM:155873",
            cvss: "5.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:155873",
          },
          {
            id: "F7C2EA22-B929-56C5-81EC-916AD38EE791",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F7C2EA22-B929-56C5-81EC-916AD38EE791",
          },
          {
            id: "EXPLOITPACK:6FCC90F735198D0FCBF891519B34A910",
            cvss: "5.0",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:6FCC90F735198D0FCBF891519B34A910",
          },
          {
            id: "EXPLOITPACK:093A394113BB59F99F2891210E4279F0",
            cvss: "5.0",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:093A394113BB59F99F2891210E4279F0",
          },
          {
            id: "EDB-ID:10085",
            cvss: "5.0",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:10085",
          },
          {
            id: "E-628",
            cvss: "5.0",
            type: "dsquare",
            is_exploit: "true",
            reference: "https://vulners.com/dsquare/E-628",
          },
          {
            id: "18F5237C-DCAC-5831-AED6-F0880A11DFF2",
            cvss: "5.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/18F5237C-DCAC-5831-AED6-F0880A11DFF2",
          },
          {
            id: "CVE-2020-1935",
            cvss: "4.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-1935",
          },
          {
            id: "CVE-2019-17569",
            cvss: "4.8",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2019-17569",
          },
          {
            id: "SSV:20861",
            cvss: "4.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20861",
          },
          {
            id: "SSV:11562",
            cvss: "4.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:11562",
          },
          {
            id: "SSV:23184",
            cvss: "4.4",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:23184",
          },
          {
            id: "SSV:20737",
            cvss: "4.4",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20737",
          },
          {
            id: "F60737C1-A24B-51C1-AE8D-73A65C778FFF",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/F60737C1-A24B-51C1-AE8D-73A65C778FFF",
          },
          {
            id: "E95D9A0E-E9DE-5D95-9879-E07C0257318C",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E95D9A0E-E9DE-5D95-9879-E07C0257318C",
          },
          {
            id: "D5CBA0E2-A4B0-52CE-B93B-F433CE8662DA",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/D5CBA0E2-A4B0-52CE-B93B-F433CE8662DA",
          },
          {
            id: "C4EDB405-454C-5160-9A99-21A930740C3F",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/C4EDB405-454C-5160-9A99-21A930740C3F",
          },
          {
            id: "B0BA17F5-F171-5C97-9F6C-D5F38B5B64F5",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/B0BA17F5-F171-5C97-9F6C-D5F38B5B64F5",
          },
          {
            id: "92CE6110-40F8-5FE5-909B-BE6B59186578",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/92CE6110-40F8-5FE5-909B-BE6B59186578",
          },
          {
            id: "743F51FB-8BF4-5425-AEFA-10B2A14C8F3B",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/743F51FB-8BF4-5425-AEFA-10B2A14C8F3B",
          },
          {
            id: "5602A60A-886A-598C-99B3-EE2E820506AD",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/5602A60A-886A-598C-99B3-EE2E820506AD",
          },
          {
            id: "504D019A-423C-50A0-9677-93192F0ECDFC",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/504D019A-423C-50A0-9677-93192F0ECDFC",
          },
          {
            id: "4278B435-D22E-57E8-ABC4-639BAAFA6FC9",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/4278B435-D22E-57E8-ABC4-639BAAFA6FC9",
          },
          {
            id: "25B0D3BA-0039-5AAB-97E1-07A88FE23CC1",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/25B0D3BA-0039-5AAB-97E1-07A88FE23CC1",
          },
          {
            id: "14CD7401-C309-52B2-B4EE-AD54900F0455",
            cvss: "4.4",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/14CD7401-C309-52B2-B4EE-AD54900F0455",
          },
          {
            id: "TOMCAT:FC12A40DC49D58432E9FA6889FA7EAFC",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FC12A40DC49D58432E9FA6889FA7EAFC",
          },
          {
            id: "TOMCAT:F0049A2F4586A81E86FFD36E3616FCA3",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F0049A2F4586A81E86FFD36E3616FCA3",
          },
          {
            id: "TOMCAT:EF109962CD817D1B323F904D966A1DB0",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EF109962CD817D1B323F904D966A1DB0",
          },
          {
            id: "TOMCAT:EF0934F55497A748BA7FEDD04D64B14F",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EF0934F55497A748BA7FEDD04D64B14F",
          },
          {
            id: "TOMCAT:EE149038DCD9C346AD647A932FC900D5",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EE149038DCD9C346AD647A932FC900D5",
          },
          {
            id: "TOMCAT:ECBBFC6AF9746E5F16035C106F520987",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:ECBBFC6AF9746E5F16035C106F520987",
          },
          {
            id: "TOMCAT:EA4ED950D02D1F036AB2297B7E4A7048",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EA4ED950D02D1F036AB2297B7E4A7048",
          },
          {
            id: "TOMCAT:E79D9E905E19211D175E5D0226367AEA",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E79D9E905E19211D175E5D0226367AEA",
          },
          {
            id: "TOMCAT:E676AE46560F7CF2AF55891ED52C5F15",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E676AE46560F7CF2AF55891ED52C5F15",
          },
          {
            id: "TOMCAT:D896CCA64831D505E12A9E23E56B484A",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D896CCA64831D505E12A9E23E56B484A",
          },
          {
            id: "TOMCAT:D0C233C8F4A89CE9F38AE85B31A58AB3",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:D0C233C8F4A89CE9F38AE85B31A58AB3",
          },
          {
            id: "TOMCAT:B8F5059D8B59B7ED231B7109C5F8A6D8",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B8F5059D8B59B7ED231B7109C5F8A6D8",
          },
          {
            id: "TOMCAT:AD034D897FBBD338FED65A9D711BA886",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:AD034D897FBBD338FED65A9D711BA886",
          },
          {
            id: "TOMCAT:A9CA732DCFA521DE2F3F29229243BBA2",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A9CA732DCFA521DE2F3F29229243BBA2",
          },
          {
            id: "TOMCAT:9F8F0274D6371091B24411814845511C",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9F8F0274D6371091B24411814845511C",
          },
          {
            id: "TOMCAT:97D3589F45C7020EA75365569675E385",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:97D3589F45C7020EA75365569675E385",
          },
          {
            id: "TOMCAT:9472937DC7D6CA449B23E8770CD44BA2",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:9472937DC7D6CA449B23E8770CD44BA2",
          },
          {
            id: "TOMCAT:909935A4BEB7C54CD1FA804D13CDD890",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:909935A4BEB7C54CD1FA804D13CDD890",
          },
          {
            id: "TOMCAT:821F7BD89AAB59FFA98BF04DB2CB99B2",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:821F7BD89AAB59FFA98BF04DB2CB99B2",
          },
          {
            id: "TOMCAT:821BD4F9C3B2B6B4987D4BA9A9211D70",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:821BD4F9C3B2B6B4987D4BA9A9211D70",
          },
          {
            id: "TOMCAT:78606D52CD7CECE336FC03BEC8BAFD03",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:78606D52CD7CECE336FC03BEC8BAFD03",
          },
          {
            id: "TOMCAT:67CE68B320511BF54B324191638E118A",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:67CE68B320511BF54B324191638E118A",
          },
          {
            id: "TOMCAT:4FEF3224A3B841D1683CF58ECA4F4632",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4FEF3224A3B841D1683CF58ECA4F4632",
          },
          {
            id: "TOMCAT:41EDA9889C0948C60EF9755D9067C2EF",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:41EDA9889C0948C60EF9755D9067C2EF",
          },
          {
            id: "TOMCAT:3C400C905C414CA6871D3DB41AFC2979",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3C400C905C414CA6871D3DB41AFC2979",
          },
          {
            id: "TOMCAT:3594E2AFE5FA0E4544AECF1CFE736974",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3594E2AFE5FA0E4544AECF1CFE736974",
          },
          {
            id: "TOMCAT:316BBFD36680C310723B450E67676491",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:316BBFD36680C310723B450E67676491",
          },
          {
            id: "TOMCAT:1CE79F1FB24CB690F26B87530FB0DBF3",
            cvss: "4.3",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1CE79F1FB24CB690F26B87530FB0DBF3",
          },
          {
            id: "SSV:84482",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:84482",
          },
          {
            id: "SSV:61594",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61594",
          },
          {
            id: "SSV:61593",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:61593",
          },
          {
            id: "SSV:60498",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60498",
          },
          {
            id: "SSV:60497",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60497",
          },
          {
            id: "SSV:60407",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60407",
          },
          {
            id: "SSV:4238",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:4238",
          },
          {
            id: "SSV:4199",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:4199",
          },
          {
            id: "SSV:3762",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:3762",
          },
          {
            id: "SSV:3378",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:3378",
          },
          {
            id: "SSV:2154",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2154",
          },
          {
            id: "SSV:2153",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2153",
          },
          {
            id: "SSV:11533",
            cvss: "4.3",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:11533",
          },
          {
            id: "PACKETSTORM:98176",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:98176",
          },
          {
            id: "PACKETSTORM:75474",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:75474",
          },
          {
            id: "PACKETSTORM:66931",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:66931",
          },
          {
            id: "PACKETSTORM:58554",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:58554",
          },
          {
            id: "PACKETSTORM:57183",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:57183",
          },
          {
            id: "PACKETSTORM:56883",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:56883",
          },
          {
            id: "PACKETSTORM:181053",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:181053",
          },
          {
            id: "PACKETSTORM:163457",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:163457",
          },
          {
            id: "PACKETSTORM:163456",
            cvss: "4.3",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:163456",
          },
          {
            id: "MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_ENUM-",
            cvss: "4.3",
            type: "metasploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_ENUM-",
          },
          {
            id: "EXPLOITPACK:5B857ACE0D2D356B9C22F728FA555508",
            cvss: "4.3",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:5B857ACE0D2D356B9C22F728FA555508",
          },
          {
            id: "EDB-ID:50118",
            cvss: "4.3",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:50118",
          },
          {
            id: "EDB-ID:31130",
            cvss: "4.3",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:31130",
          },
          {
            id: "D2SEC_TOMCAT_ENUMUSER",
            cvss: "4.3",
            type: "d2",
            is_exploit: "true",
            reference: "https://vulners.com/d2/D2SEC_TOMCAT_ENUMUSER",
          },
          {
            id: "CVE-2023-28708",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2023-28708",
          },
          {
            id: "CVE-2020-13943",
            cvss: "4.3",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2020-13943",
          },
          {
            id: "1337DAY-ID-36546",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-36546",
          },
          {
            id: "1337DAY-ID-36545",
            cvss: "4.3",
            type: "zdt",
            is_exploit: "true",
            reference: "https://vulners.com/zdt/1337DAY-ID-36545",
          },
          {
            id: "TOMCAT:EA3D2D7C5F724461ADF487B3F1B37FFE",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:EA3D2D7C5F724461ADF487B3F1B37FFE",
          },
          {
            id: "TOMCAT:B5460923270358EAE8BBCD35A7CF1F2D",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:B5460923270358EAE8BBCD35A7CF1F2D",
          },
          {
            id: "TOMCAT:714BD411598C43D1A796F94A13DB52B8",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:714BD411598C43D1A796F94A13DB52B8",
          },
          {
            id: "TOMCAT:65DF1688E1F40EE0325BE31BC13EB777",
            cvss: "4.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:65DF1688E1F40EE0325BE31BC13EB777",
          },
          {
            id: "TOMCAT:FBD058D9A4CD0B4D5301142B944CCC45",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:FBD058D9A4CD0B4D5301142B944CCC45",
          },
          {
            id: "TOMCAT:C0F3A91E4159E4828BD7AADAC9AC660E",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:C0F3A91E4159E4828BD7AADAC9AC660E",
          },
          {
            id: "TOMCAT:666A364CBDFFACBB971313A921FC4EAA",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:666A364CBDFFACBB971313A921FC4EAA",
          },
          {
            id: "TOMCAT:4D17CC9A33E351214CF1DDB80E3259EC",
            cvss: "3.7",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:4D17CC9A33E351214CF1DDB80E3259EC",
          },
          {
            id: "CVE-2021-43980",
            cvss: "3.7",
            type: "cve",
            is_exploit: "false",
            reference: "https://vulners.com/cve/CVE-2021-43980",
          },
          {
            id: "SSV:2341",
            cvss: "3.5",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:2341",
          },
          {
            id: "TOMCAT:E6740DAF058123DC943997C26451826D",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E6740DAF058123DC943997C26451826D",
          },
          {
            id: "TOMCAT:E3665FADE846A5D9D5081D1755E7F91B",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:E3665FADE846A5D9D5081D1755E7F91B",
          },
          {
            id: "TOMCAT:CAB438FBDD760140423C7697D5982A71",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:CAB438FBDD760140423C7697D5982A71",
          },
          {
            id: "TOMCAT:6CDE0FF44350468F3A3F350EC3A46C2D",
            cvss: "2.6",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:6CDE0FF44350468F3A3F350EC3A46C2D",
          },
          {
            id: "SSV:68397",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:68397",
          },
          {
            id: "SSV:60787",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60787",
          },
          {
            id: "SSV:4848",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:4848",
          },
          {
            id: "SSV:19510",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:19510",
          },
          {
            id: "SSV:19493",
            cvss: "2.6",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:19493",
          },
          {
            id: "EXPLOITPACK:B817C3837AAE1BBA6FEB9BABE212CE90",
            cvss: "2.6",
            type: "exploitpack",
            is_exploit: "true",
            reference:
              "https://vulners.com/exploitpack/EXPLOITPACK:B817C3837AAE1BBA6FEB9BABE212CE90",
          },
          {
            id: "EDB-ID:12343",
            cvss: "2.6",
            type: "exploitdb",
            is_exploit: "true",
            reference: "https://vulners.com/exploitdb/EDB-ID:12343",
          },
          {
            id: "TOMCAT:3FAC6BB614BBE0076581BA0B6BB749B1",
            cvss: "1.2",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:3FAC6BB614BBE0076581BA0B6BB749B1",
          },
          {
            id: "SSV:20802",
            cvss: "1.2",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:20802",
          },
          {
            id: "TOMCAT:F80CBBC66CE4286D1D9AE52B7FA943BC",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:F80CBBC66CE4286D1D9AE52B7FA943BC",
          },
          {
            id: "TOMCAT:A0C1BE19A411D6582E2968BB7DC771B9",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:A0C1BE19A411D6582E2968BB7DC771B9",
          },
          {
            id: "TOMCAT:86F4A891B6EAC74A73C41E9C1370EA3F",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:86F4A891B6EAC74A73C41E9C1370EA3F",
          },
          {
            id: "TOMCAT:82BA0DC40ABA6C528A36EA786196208A",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:82BA0DC40ABA6C528A36EA786196208A",
          },
          {
            id: "TOMCAT:1F274D0542D4CC646B037CC0CA3ADE06",
            cvss: "0.0",
            type: "tomcat",
            is_exploit: "false",
            reference:
              "https://vulners.com/tomcat/TOMCAT:1F274D0542D4CC646B037CC0CA3ADE06",
          },
          {
            id: "SSV:97149",
            cvss: "0.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:97149",
          },
          {
            id: "SSV:60454",
            cvss: "0.0",
            type: "seebug",
            is_exploit: "true",
            reference: "https://vulners.com/seebug/SSV:60454",
          },
          {
            id: "PACKETSTORM:144591",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:144591",
          },
          {
            id: "PACKETSTORM:144557",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:144557",
          },
          {
            id: "PACKETSTORM:141920",
            cvss: "0.0",
            type: "packetstorm",
            is_exploit: "true",
            reference: "https://vulners.com/packetstorm/PACKETSTORM:141920",
          },
          {
            id: "E00048F1-1C62-5371-9456-415F8E3DAD66",
            cvss: "0.0",
            type: "githubexploit",
            is_exploit: "true",
            reference:
              "https://vulners.com/githubexploit/E00048F1-1C62-5371-9456-415F8E3DAD66",
          },
        ],
      },
    ],
    ssl: [],
    technology: "tech",
    autonomous_system: {
      asn: "None",
      description: "MAINT-VN-VNNIC",
      bgp_prefix: "None",
      name: "YENBAI-VN",
      country_code: "VN",
    },
    operating_system: {
      vendor: "unknown",
      cpe: "unknown",
      kernel_version: "unknown",
    },
    dns: [
      {
        "Asset Name": "xuanlai.yenbinh.yenbai.gov.vn.",
        "Record Type": "A",
        Record: "103.42.54.7",
      },
    ],
  },
];

const CVEData = (service) => {
  return data[0].services.find((item) => item.service_name === service);
};

const allCVEData = () => {
  const domainServiceMap = {};

  // Loop through the array
  data.forEach((entry) => {
    const domain = entry.domain;
    const services = entry.services;

    // Store the domain and its services in the hashmap
    domainServiceMap[domain] = services;
  });
  return domainServiceMap;
};

const serviceData = data[0].services;

const dataCVE = data[0].services.filter(
  (services) => services.vulnerabilities.length > 0
);

export { data, dataCVE, CVEData, serviceData, allCVEData };



