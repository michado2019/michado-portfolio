import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footer-flex_div">
        <div className="footer-flex">
          <a
            href="https://github.com/michado2019"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="data:image/png;base64,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"
              alt="img"
              className="footer-icons"
              id="githubIcon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/michado2019/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////Nzc1ZWVmqqqqdnZ2JiYnQ0NBvb29VVVXg4ODm5ubr6+tfX1+0tLQjIyMcHBw9PT1kZGR+fn6/v7/y8vIrKyvHx8dCQkKRkZFdXV2kpKQzMzPW1taTk5OamppJSUmDg4Ourq5zc3MPDw8WFhYnJyepn48IAAAE/klEQVR4nO2d21rqMBBGGwUEKSAFZGM5Ker7P+IWK+qHLfmZNkkn378uvGucBSXNYTJNTEGaZ5MkHiZZnn6ZJZ9/h/3QITngMPwxHIcOxhHjk2E3dCTO2BWGsX6DR8ZHw2HoKJwy/DCMsZP54WCSNHQMjkmTPHQIjukko9AhOCZLYhrJlBG7HyGEEEIIiY1pNlvttr3DIHQgbhiMT6uPxizueq+h42ma2cKcMV+HjqlJ+um53+cS60PouBpjXuZ3vFmz0JE1w2PpF1iwCx1cE+yr/eLYDFhfFDTmJXSAdXm9cIsW9EKHWJOlTdCYf6FjrMXMLqh80+PPc76MVegoa7BDBM1C8QgOEtTc2RxAw/vQgYq5AQ3NY+hIpUD9zBGtfc0TKmiWoUMVgjwMCxahQxWSw4YmdKhCqqaFJSidC8NdqTFKVzSAUbdywzFu+BY6VhnYqPST0KEKQQdteidQA9hwHjpUKfCo7Tl0pFLgB6LaCeIIFLwLHagc60JbgeLkTWzsrXcCnBzTa+P+CrEp4k3oIOvRsRuq7Ui/2NgEb0NHWBvLT3EWOr76PNxHLphcnCfGkiG+qvDbxJNAvS4boaZx3KEn/p07DvVuVlQyG3/Ppjb5NHQ0rtiPDtlA7S4FIYQQQgghpJT1YNSf9bPRPr7B/mSUL8+WwBabeTdTupt+zqBbvYQ5XD43OzXt9wAqPtinlfXKknWQt511O+h+2+D60J3tvx15Kr/2xX7ln93xKbhluWxsHRpKqan4b8CGwNmu1fSK/JZNxefaakPggt/cNNLteDQcwFkD32xVGQK/2r9s6ufT+TKcXNwcqSbdKzGcXn+HWv55ywzx1KTmFb0Y3tYRNKbeqWQfhrbTcTYWtYblHgwf5L/BX6202dCaKGCn02rDK9Llr46gFYaXz+Ci1MhvdW4IJV3ZkR/acW3Yq6v2hfyAoGPD5hDXX1VjKM6l12MoTZzQYyjtTvUYSoenigyF9SsUGQoL6SoyFN6mmgxltYI1GW6iN5QlnKsyFKXzqjIUTYS9G950ngfTx8njdLQdg2eSfq5tveHi5ayldfe6NZyWGy5WZT3F9pomJGv8/gznFYel11esAkjKx3kzvJAVj5cFkKxl+DK8+OnDuzaSztST4eVzDW9oM5LO1I+hraodemxeMr3wYmifnoPr4pIiMl4M7SvWGWgoyELxYYjMCcBHhqD8nw9DZMAMPvgFGSgeDKHu4R1rS3Dm2oMhNjXHbtNDKw2x5RWsVo7gvKB7Q/AZ1ocaEyx8uzcES71hm/2CssbuDdHRMtSYYLnNvSE644GG34J1b/eGaA0tKJJWGqKRQKm1gmpOzg3hTTEoZ6ONhnDVzKqaALLWPBrCvxyoGJBgCuzcEF54gB75goJVzg3hJxg0RWyjIZyqDRXEbaMhXMtOrSE8G4DSbNtoCM/o1BrCs3IoF5yGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNLTi+E06TZ8KEpROnHUBKt73kgGX5nC9lXUONBfXW6YJIYQQQkh0NPhaz1bynkjq72oiS2Q19/XQSYSvhlBDmkgqKiriYJI6b/VSwPDDUPqSFhWMzdFQ/s6r1rMzhWG03+Jn4dOiruQwxu7mUNSuPVXOTPMsptHNJOuc3pDxH+JaZlSInB3vAAAAAElFTkSuQmCC"
              alt="img"
              className="footer-icons"
              id="linkedIn-icon"
            />
          </a>
        </div>
        <div className="footer-flex">
          <a
            href="https://twitter.com/Mike_Adeshina"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAY1BMVEUAAAD////l5eUlJSVpaWlsbGypqamwsLC9vb2VlZX8/Pz4+Pju7u5wcHDy8vLq6uphYWE2NjbMzMwvLy/f398dHR3X19dBQUG3t7eCgoJWVlYZGRlKSkp8fHwSEhKjo6OMjIxSM18hAAADEklEQVRoge2b2aKCIBBA0dwT9zRbrv3/V16XzDR1GFB54bxmndiGAYFoHbplnMjOnAxLf+tIJzX3VvaY+qC1j5I22L3WPdJKiNtpDy1rg91o9aOthOi19rDeNGBqREJh6+ISS4bWIoYMrUF2j01zSJEqFAqFQqHgJI7KynbLW3qk083O79WNn0zSpPtuUkcbkT+Gz6IcXfzXjemxSvuhfH9UZvjs/+J7McNj+a9V0171B5HTVPwTq6WaxuAN5qz1wur9bzKslTQt5hXAQ+G89QNLfY3pFsAR+NfWoGjrxe++udY4FLC2Xau8YLRx32rV4iN/+qr0TEls2EGOsQ5aLVlqoPXCeradBWAzTUmHPuovrM8SoI5bkEvKvm1brnOLpRPUjduqwlkJyb6/Hcz0rAeD1cFap4PjO9J2RLCVY9H+nP5GPukcJmhFR8aa4vzzM+FoC8uArFcO60JHTcrPcLpB2uURv8bCsPRC+9m2c/pbHWM4t/eyxR/0Aj2xXGgAvfi0DF11FZ4e1WCJaXk2ny7NVMsU/pbwfkY6izZ0ojs4oa7hc20/1bPaOb8uJC0s8G1nClVwA26i7XFFtXzDFgxCEGxp9hQgZQEJ8Fljy0y6jwGfInfEUMxdh/vVh1inwqVu38yubxgJUenxiFSgV+GzqIETv5e/jht4g7L+J6Ql1IcdM4i/OKQcPcsTLKxLTfqs0COYL2kc4JyHRN/08OVT4q/wuEKGsJVpgTVli/ff+MjMO/eMQUcMaHuHkSvOutkRA9SEj16/L1Ow9+dQMD5NxFe2SHXefEO5eFnLa8AevnRxnZcHSD2xWXaWGIzP3vZlvVdQUbVgc2tRwbN9vvEBg5QmDN1YJGfr6QffPb1VLM7ZbToOrZs4NTlr5uhsFSRMRK6abTluKMsO6tbSBoMhFDt7xCUgFGe7naP7o858ZftOue97xMvDdXL/E6TOYZZUtOBf0WFIi0dkGkZ0e8SnTadUhUKhUCgUOyHpWLSkQ+CSjrxLOuAv6TqDrMsbkq6qyLqYI+sakqxLV9rhV8z+ASw+IfFLxONcAAAAAElFTkSuQmCC"
              alt="img"
              className="footer-icons"
              id="twitterIcon"
            />
          </a>
          <a
            href="mailto: adeshinaobafemi09@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCe8PumZ5jhEGolAsIG_iv2LKJ6OBsw0V4Q&usqp=CAU"
              alt="img"
              className="footer-icons"
              id="emailIcon"
            />
          </a>
        </div>
      </div>
      <p className="footer-copyright">&copy; Michado 2022</p>
    </div>
  );
}
