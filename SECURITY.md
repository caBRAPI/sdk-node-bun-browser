# Security

The security of this SDK is handled with priority. If you identify a vulnerability, we appreciate responsible disclosure so we can investigate and fix the issue quickly.

## Reporting a vulnerability

Send the details through one of the channels below:

* Send an email to the responsible sector `suporte@cabrapi.com.br`

* Or send an email directly to the responsible developer `sebastianjnuwu@gmail.com`.

## Important information in the report

Whenever possible, include:

* Affected SDK version
  Example: `1.0.0`

* Environment used
  Example: Node.js, Bun, Deno, Edge Runtime, Cloudflare Workers etc.

* Detailed steps to reproduce the issue

* Expected and observed behavior

* Logs, stack traces and proofs of concept (PoC)

* Potential impact of the vulnerability

## Response process

We commit to following a process of responsible disclosure:

1. We confirm receipt of the report within **72 hours**
2. We investigate the issue and assess the impact
3. When necessary, we develop a fix and publish a new version
4. We issue a security note and CVE (when applicable)
5. The report author will be informed before public disclosure

## Responsible disclosure policy

To protect users of the project:

* Do not publicly disclose technical details of the vulnerability before the official fix
* Avoid publishing exploits, PoCs or reproduction methods in public Issues
* Wait for the release of the patch and the security note

## Security recommendations

To reduce risks in production:

* Always use the latest version of the SDK
* Keep your runtimes updated
  Recommended: `Node.js >= 18`
* Never expose private keys in the client
* Store secrets using secure environment variables
* Implement proper validation and authentication on the server

We appreciate your collaboration in keeping the ecosystem safer for everyone.
