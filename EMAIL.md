# Email — contact@ip3.studio via Google Workspace

Goal: mail sent to **contact@ip3.studio** lands in a real Google mailbox, and mail
*from* the domain passes SPF + DKIM + DMARC so it doesn't go to spam.

Provider: **Google Workspace Business Starter — £6/user/month** (one seat).
Domain registrar (where DNS lives): **GoDaddy**.

> One seat is enough. Extra addresses (hello@, press@, roxana@) can be added later
> as **aliases for free** — aliases don't cost an extra seat.

---

## Step 1 — Sign up for Google Workspace

1. Go to [workspace.google.com](https://workspace.google.com) → **Get started**.
2. Business name: **IP3 Studio Ltd**. Employees: **Just you**. Region: **United Kingdom**.
3. Enter a current contact email + Roxana's name.
4. "Does your business have a domain?" → **Yes, I have one** → enter **`ip3.studio`**.
5. Choose **Business Starter** (£6/user/mo). Don't add extra users yet.
6. Create the primary account. **Make the username `contact`** so the primary
   mailbox is `contact@ip3.studio` — that's the only address referenced publicly,
   so it should be the real mailbox, not an alias. (You can add `roxana@` as a free
   alias afterwards.)

You'll finish signup logged into the **Google Admin console** at
[admin.google.com](https://admin.google.com).

---

## Step 2 — Verify domain ownership (TXT record)

Workspace will show a **verification TXT record** (looks like `google-site-verification=…`).

In **GoDaddy → Domain Portfolio → ip3.studio → DNS → Add Record**:

| Type | Name | Value                              | TTL    |
|------|------|------------------------------------|--------|
| TXT  | `@`  | `google-site-verification=…` (paste from Workspace) | 1 hour |

Back in Workspace, click **Verify**. (Propagation is usually a few minutes.)

---

## Step 3 — Confirm the mailbox

In Admin console → **Directory → Users**, confirm **contact@ip3.studio** exists.
Set its password / hand it to Roxana. This is the inbox everything lands in.

*(Optional, free):* **Add alias** → `roxana@ip3.studio` → routes to the same inbox.

---

## Step 4 — MX records (where mail is delivered)

⚠️ **First delete GoDaddy's default MX records.** A GoDaddy domain often ships with
MX pointing at `*.secureserver.net`. Remove those, or mail will misroute.

Then add Google's MX. Google's current setup is a **single** record:

| Type | Name | Value             | Priority | TTL    |
|------|------|-------------------|----------|--------|
| MX   | `@`  | `smtp.google.com` | 1        | 1 hour |

<details>
<summary>Legacy 5-record set (only if the single record isn't offered)</summary>

| Type | Name | Value                      | Priority |
|------|------|----------------------------|----------|
| MX   | `@`  | `ASPMX.L.GOOGLE.COM`       | 1        |
| MX   | `@`  | `ALT1.ASPMX.L.GOOGLE.COM`  | 5        |
| MX   | `@`  | `ALT2.ASPMX.L.GOOGLE.COM`  | 5        |
| MX   | `@`  | `ALT3.ASPMX.L.GOOGLE.COM`  | 10       |
| MX   | `@`  | `ALT4.ASPMX.L.GOOGLE.COM`  | 10       |
</details>

---

## Step 5 — SPF (authorise Google to send for the domain)

| Type | Name | Value                                 | TTL    |
|------|------|---------------------------------------|--------|
| TXT  | `@`  | `v=spf1 include:_spf.google.com ~all` | 1 hour |

> Only **one** SPF record per domain. If a `v=spf1 …` TXT already exists, edit it to
> include `include:_spf.google.com` rather than adding a second one.

---

## Step 6 — DKIM (cryptographically sign outgoing mail)

DKIM for Google Workspace is a **TXT** record (not CNAME).

1. Admin console → **Apps → Google Workspace → Gmail → Authenticate email**.
2. Select domain `ip3.studio`, key length **2048**, then **Generate new record**.
3. Google gives you a host and a long value:
   - **Host / Name:** `google._domainkey`
   - **Value:** `v=DKIM1; k=rsa; p=MIIBIjANBg…` (long)
4. Add at GoDaddy:

| Type | Name                | Value                          | TTL    |
|------|---------------------|--------------------------------|--------|
| TXT  | `google._domainkey` | `v=DKIM1; k=rsa; p=…` (paste)  | 1 hour |

5. Back in the Gmail Authenticate screen, click **Start authentication**.

> If GoDaddy rejects the long value, regenerate the key at **1024-bit** and retry,
> or split into quoted 255-char chunks — GoDaddy concatenates them.

---

## Step 7 — DMARC (policy + reporting)

Start in **monitor mode** so nothing legit gets blocked while you confirm SPF/DKIM pass.

| Type | Name     | Value                                                            | TTL    |
|------|----------|------------------------------------------------------------------|--------|
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:contact@ip3.studio; adkim=s; aspf=s` | 1 hour |

After ~1 week of clean aggregate reports, tighten the policy:
`p=none` → `p=quarantine` → `p=reject`.

---

## Step 8 — Test & verify

Once records propagate (minutes to a couple of hours):

```bash
dig +short MX    ip3.studio          # → 1 smtp.google.com.
dig +short TXT   ip3.studio          # → v=spf1 include:_spf.google.com ~all
dig +short TXT   google._domainkey.ip3.studio   # → v=DKIM1; k=rsa; p=…
dig +short TXT   _dmarc.ip3.studio   # → v=DMARC1; p=none; …
```

Then the real test:
1. From a personal account (Gmail/Outlook), **send a message to contact@ip3.studio** —
   confirm it arrives in the Workspace inbox.
2. **Reply from contact@ip3.studio** to that account. Open the received copy →
   **Show original** (Gmail) and confirm **SPF: PASS, DKIM: PASS, DMARC: PASS**.
3. Optional: send to [check-auth@verifier.port25.com](mailto:check-auth@verifier.port25.com)
   or use [mail-tester.com](https://www.mail-tester.com) for a full deliverability score.

✅ Done — `contact@ip3.studio` is live, and the footer link in ukfunding.io now resolves
to a working mailbox.
