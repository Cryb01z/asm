const testData = {
  domain: "itb.info",
  discovery_reason: "testing",
  discovery_on: "2024-10-16",
  ip: "127.0.0.1",
  services: [
    {
      http: {
        request: {
          method: "GET",
          uri: "http://127.0.0.1:80",
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
      service_name: "OPERATING SYSTEMS",
      software: [
        {
          vendor: "Debian Ubuntu",
          product: "Debian Ubuntu",
          version: "22.04",
        },
      ],
      vulnerabilities: [
        {
          id: "CVE-2023-29457",
          cvss: "6.3",
          type: "metasploit",
          is_exploit: "true",
          reference:
            "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
        },
        {
          id: "CVE-2023-2718",
          cvss: "5.4",
          type: "WPScan",
          is_exploit: "true",
          reference:
            "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
        },
        {
          id: "CVE-2020-25048",
          cvss: "4.6",
          type: "MITRE",
          is_exploit: "true",
          reference:
            "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
        },
        {
          id: "CVE-2023-4485",
          cvss: "9.8",
          type: "ICS-CERT",
          is_exploit: "true",
          reference:
            "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
        },
        {
          id: "CVE-2023-40729",
          cvss: "7.4",
          type: "Zabbix",
          is_exploit: "true",
          reference:
            "https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-HTTP-TOMCAT_MGR_LOGIN-",
        },
      ],
    },
    {
      http: {
        request: {
          method: "GET",
          uri: "http://127.0.0.1:443",
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
      service_name: "WEB SERVERS",
      software: [
        {
          vendor: "Nginx",
          product: "Nginx",
          version: "10.0",
        },
      ],
      vulnerabilities: [],
    },
    {
      http: {
        request: {
          method: "GET",
          uri: "http://127.0.0.1:8080",
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
      service_name: "http-proxy",
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
          uri: "http://127.0.0.1:8080",
        },
        response: {
          protocol: "HTTP/1.1",
          status_code: "404",
          status_reason: "OK",
          header_location: "",
          html_title: "",
        },
      },
      port: "8080",
      service_name: "http-proxy",
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
          uri: "http://127.0.0.1:8080",
        },
        response: null,
      },
      port: "8080",
      service_name: "http-proxy",
      software: [
        {
          vendor: "",
          product: "",
          version: "",
        },
      ],
      vulnerabilities: [],
    },
  ],
  ssl: [
    {
      expiry_date: 1734317455000,
      issue_date: 1700016656000,
      id: "c3b6d6b1e0a673b6e1e0bd48ae63cb79a95bcbb85e13d2669b450b616c2a0bfa",
      grade: "B",
      issuerSubject: "CN=AlphaSSL CA - SHA256 - G4, O=GlobalSign nv-sa, C=BE",
      subject_alt_names: ["*.itb.com", "itb.com"],
      subject_cn: ["*itb.com"],
      serialNumber: "09be19103fb0a96d8128748e",
      raw: "-----BEGIN CERTIFICATE-----\nMIIGTTCCBTWgAwIBAgIMCb4ZED+wqW2BKHSOMA0GCSqGSIb3DQEBCwUAMEwxCzAJBgNVBAYTAkJF\r\nMRkwFwYDVQQKExBHbG9iYWxTaWduIG52LXNhMSIwIAYDVQQDExlBbHBoYVNTTCBDQSAtIFNIQTI1\r\nNiAtIEc0MB4XDTIzMTExNTAyNTA1NloXDTI0MTIxNjAyNTA1NVowGjEYMBYGA1UEAwwPKi55ZW5i\r\nYWkuZ292LnZuMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqPPKBdptt5JNi5Tc/klN\r\n2o2/BGGc08XHC96DzhzimHc/AFgWSIctYntvzrqyFOcIog57vHRLxd2lI+ud3gjjFT9r0M6Q8rWh\r\njRTPwKTZdQl4hen+xAyu7NIuMja71JdOZ4G23hCSvwugE0OkFiwpplAKvgvVWQxKWxecMl+PZXLm\r\nUM5aiNejaNqMFsRx3ZWhlu7nI7c3OhHi6W4BjsecZaQPsU+09mTAKi6FSL2qoR7ccxJul721hC0O\r\n7vVXHGqCC/xYcr8gUduglRyiPwTc5EQ5pIFk3kCWpINJ8weLLejM9/iMFdz0GKMIUATwgpEJSVGR\r\nWJqcdPNe8U78vOvRuQIDAQABo4IDXzCCA1swDgYDVR0PAQH/BAQDAgWgMAwGA1UdEwEB/wQCMAAw\r\ngZMGCCsGAQUFBwEBBIGGMIGDMEYGCCsGAQUFBzAChjpodHRwOi8vc2VjdXJlLmdsb2JhbHNpZ24u\r\nY29tL2NhY2VydC9hbHBoYXNzbGNhc2hhMjU2ZzQuY3J0MDkGCCsGAQUFBzABhi1odHRwOi8vb2Nz\r\ncC5nbG9iYWxzaWduLmNvbS9hbHBoYXNzbGNhc2hhMjU2ZzQwVwYDVR0gBFAwTjAIBgZngQwBAgEw\r\nQgYKKwYBBAGgMgoBAzA0MDIGCCsGAQUFBwIBFiZodHRwczovL3d3dy5nbG9iYWxzaWduLmNvbS9y\r\nZXBvc2l0b3J5LzBBBgNVHR8EOjA4MDagNKAyhjBodHRwOi8vY3JsLmdsb2JhbHNpZ24uY29tL2Fs\r\ncGhhc3NsY2FzaGEyNTZnNC5jcmwwKQYDVR0RBCIwIIIPKi55ZW5iYWkuZ292LnZugg15ZW5iYWku\r\nZ292LnZuMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAfBgNVHSMEGDAWgBRPy6yowu+r\r\n3YNva7/OmD1cWCV2FTAdBgNVHQ4EFgQUK/87wDEDkrwct9pJmWbAFblN3J4wggF9BgorBgEEAdZ5\r\nAgQCBIIBbQSCAWkBZwB1AEiw42vapkc0D+VqAvqdMOscUgHLVt0sgdm7v6s52IRzAAABi9Djl9EA\r\nAAQDAEYwRAIgQ3Sjy50qL6EDdtEUfHUNz2Auet+1qxKKS+uSkh/MMwwCIEDggaUAZwk5shRG/OlX\r\n9CECLFSdR9rg4iU4Lpnlj50rAHYA7s3QZNXbGs7FXLedtM0TojKHRny87N7DUUhZRnEftZsAAAGL\r\n0OOYxQAABAMARzBFAiEAkvoEioLhCd32H268cxvmAFE0cRYMeTtSTQk6PW2PhpMCIFBVVufmkqUZ\r\nBrrklxD8gcR+RNCzoAkQrD9PlZCIgU6iAHYAdv+IPwq2+5VRwmHM9Ye6NLSkzbsp3GhCCp/mZ0xa\r\nOnQAAAGL0OObnwAABAMARzBFAiEAhUHa4eO7vVwRxBy2uv5aPmEDFxtGPSkjtmxAoOc+dQECIFhy\r\n111so0PrkCv2bmEFPwtCXsKHUCYTG1ONL8ekPTqmMA0GCSqGSIb3DQEBCwUAA4IBAQAW9MFTsEPt\r\na0jTqffuTeaBBu6zxMphRm0X6k9MmQsaxZ6mFsXEtuIl9MbiWCpngp88p/uNB9WlAH91C4Q9VniJ\r\n+ysTUrumtFjx/zgzSjcPp8t7EKDO9Rg5UJWeEFgdrHSKD5p+XM0bjpgM3Wm9nKqi/Wga274tjJne\r\nOWVd4ywsTwQJh8TtbKFmXlAIi4bv+P9cdw+vuaXub7ty3obeVuu6YXlatYYPFoWdw2WxF4ss3PIA\r\n6Dqt9zavZZn9ahCZJXcH3mSf6iSmuH2bLkq8Op8XtT8jOPcMSW7tuqFWJIhOtxb36OS0aGGt/7ok\r\nvg8xISXFu72EzU3B5Vy7D7h6OcfG\r\n-----END CERTIFICATE-----\n",
      sigAlg: "SHA256withRSA",
      subject: "CN=*itb.com",
      validationType: "",
      version: "2.3.0",
    },
    {
      expiry_date: 1823299200000,
      issue_date: 1665546583000,
      id: "7c4e90207b2b7caec080426cc469908cb27b925ee3b1c999c22b8568812fda8c",
      grade: "B",
      issuerSubject:
        "CN=GlobalSign Root CA, OU=Root CA, O=GlobalSign nv-sa, C=BE",
      subject_alt_names: [],
      subject_cn: ["AlphaSSL CA - SHA256 - G4"],
      serialNumber: "7d4d42a92b431d7e6453e7c19a8d5877",
      raw: "-----BEGIN CERTIFICATE-----\nMIIEijCCA3KgAwIBAgIQfU1CqStDHX5kU+fBmo1YdzANBgkqhkiG9w0BAQsFADBXMQswCQYDVQQG\r\nEwJCRTEZMBcGA1UEChMQR2xvYmFsU2lnbiBudi1zYTEQMA4GA1UECxMHUm9vdCBDQTEbMBkGA1UE\r\nAxMSR2xvYmFsU2lnbiBSb290IENBMB4XDTIyMTAxMjAzNDk0M1oXDTI3MTAxMjAwMDAwMFowTDEL\r\nMAkGA1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExIjAgBgNVBAMTGUFscGhhU1NM\r\nIENBIC0gU0hBMjU2IC0gRzQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCtJCmVZhWI\r\nPzOHA3jP1QwkuDFT8/+DImyZlSt85UpZwq7G0Sqd+n8gLlHIZypQkad5VkT7OLU+MI78lC7LVwxp\r\nU19ExlaWL67ANyWG8XHx3AJFQoZhuDbvUeNzRQyQs6XS5wN6uDlF0Bf1AtCUQWrGGLGYwyC1xTrz\r\ngrFKpESsIXMqklUGTsh8i7DKZhRUVfgrPLJUkbbLUrLY42+KRCiwfSvBloC5PgDYnj3oMZ1aTe3W\r\nfk3l1I4D3RKaJ4PU1qHXhHJOge2bjGIGl6MsaBN+BB2sr6EnxX0xnMIbew2oIfOFoLqs47vh/GH4\r\nJN0qql2WBHfDPVDm3b+GQxY6N/LXAgMBAAGjggFbMIIBVzAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0l\r\nBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFE/L\r\nrKjC76vdg29rv86YPVxYJXYVMB8GA1UdIwQYMBaAFGB7ZhpFDZfKiVAvfQTNNKj//P1LMHoGCCsG\r\nAQUFBwEBBG4wbDAtBggrBgEFBQcwAYYhaHR0cDovL29jc3AuZ2xvYmFsc2lnbi5jb20vcm9vdHIx\r\nMDsGCCsGAQUFBzAChi9odHRwOi8vc2VjdXJlLmdsb2JhbHNpZ24uY29tL2NhY2VydC9yb290LXIx\r\nLmNydDAzBgNVHR8ELDAqMCigJqAkhiJodHRwOi8vY3JsLmdsb2JhbHNpZ24uY29tL3Jvb3QuY3Js\r\nMCEGA1UdIAQaMBgwCAYGZ4EMAQIBMAwGCisGAQQBoDIKAQMwDQYJKoZIhvcNAQELBQADggEBABol\r\n9nNkiECpWQenQ7oVP1FhvRX/LWTdzXpdMmp/SELnEJhoOe+366E0dt8tWGg+ezAcDPeGYPmp83nA\r\nVLeDpji7Nqu8ldB8+G/B6U9GB8i2DDIAqSsFEvcMbWb5gZ2/DmRNcifGi9FKAuFu2wyft4s4DHwz\r\nL2CJ2zjMlUOM3RaE1cxuOs+Om6MCD9G7vnkAtSiC/OOfHO902f4yI2a48K+gKaAf3lISFXjd32pw\r\nQ21LpM3ueIGydaJ+1/z8nv+C7SUT5bHoz7cYU27LUvh1n2WSNnC6/QwFSoP6gNKa4POO/oO13xjh\r\nrLRHJ/04cKMbRALtJWQkPacJ8SJVhB2R7BI=\r\n-----END CERTIFICATE-----\n",
      sigAlg: "SHA256withRSA",
      subject: "CN=AlphaSSL CA - SHA256 - G4, O=GlobalSign nv-sa, C=BE",
      validationType: "",
      version: "2.3.0",
    },
    {
      expiry_date: 1832673600000,
      issue_date: 904651200000,
      id: "ebd41040e4bb3ec742c9e381d31ef2a41a48b6685c96e7cef3c1df6cd4331c99",
      grade: "B",
      issuerSubject:
        "CN=GlobalSign Root CA, OU=Root CA, O=GlobalSign nv-sa, C=BE",
      subject_alt_names: [],
      subject_cn: ["GlobalSign Root CA"],
      serialNumber: "040000000001154b5ac394",
      raw: "-----BEGIN CERTIFICATE-----\nMIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkGA1UEBhMCQkUx\r\nGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jvb3QgQ0ExGzAZBgNVBAMTEkds\r\nb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAwMDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNV\r\nBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYD\r\nVQQDExJHbG9iYWxTaWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDa\r\nDuaZjc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavpxy0Sy6sc\r\nTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp1Wrjsok6Vjk4bwY8iGlb\r\nKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdGsnUOhugZitVtbNV4FpWi6cgKOOvyJBNP\r\nc1STE4U6G7weNLWLBYy5d4ux2x8gkasJU26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrX\r\ngzT/LCrBbBlDSgeF59N89iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV\r\nHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0BAQUF\r\nAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOzyj1hTdNGCbM+w6Dj\r\nY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE38NflNUVyRRBnMRddWQVDf9VMOyG\r\nj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymPAbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhH\r\nhm4qxFYxldBniYUr+WymXUadDKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveC\r\nX4XSQRjbgbMEHMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==\r\n-----END CERTIFICATE-----\n",
      sigAlg: "SHA1withRSA",
      subject: "CN=GlobalSign Root CA, OU=Root CA, O=GlobalSign nv-sa, C=BE",
      validationType: "",
      version: "2.3.0",
    },
  ],
  technology: [
    {
      category: "Web Servers",
      subtech: [
        {
          technology: "Nginx",
          version: null,
          description:
            'Nginx (pronounced as "engine X") is a lightweight open source web server developed by Igor Sysoev.',
        },
      ],
      port: "443",
      status: "200",
    },
    {
      category: "Operating System",
      subtech: [
        {
          technology: "Ubuntu",
          version: null,
          description:
            "Ubuntu is a free and open-source operating system on Linux for the enterprise server, desktop, cloud, and IoT.",
        },
      ],
      port: "80",
      status: "200",
    },
  ],
  autonomous_system: {
    asn: "None",
    description: "MAINT-VN-VNNIC",
    bgp_prefix: "None",
    name: "itb.com",
    country_code: "VN",
  },
  operating_system: {
    vendor: "unknown",
    cpe: "unknown",
    kernel_version: "unknown",
  },
  dns: [
    {
      Asset_Name: "itb.com",
      Record_Type: "SOA",
      Record:
        "ns1.vdconline.vn. vdconline.tld. 2024091288 28800 7200 1209600 86400",
    },
    {
      Asset_Name: "itb.com",
      Record_Type: "NS",
      Record: "ns2.vdconline.vn.",
    },
    {
      Asset_Name: "itb.com",
      Record_Type: "NS",
      Record: "ns1.vdconline.vn.",
    },
  ],
};

const scanResult = () => {
  return testData;
};

const scan = (domain, discovery_reason) => {
  const data = testData;
  data.domain = domain;
  data.discovery_reason = discovery_reason;
  return data;
};

export { testData, scanResult };

