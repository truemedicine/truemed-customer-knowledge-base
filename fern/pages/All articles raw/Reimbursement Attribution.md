---
title: "Reimbursement Attribution"
---

It's important for Truemed partners to know which customers are getting reimbursed, and how these customers are discovering Truemed. To this end, Truemed supports optional query parameters for attribution purposes.

## Source

Most of our merchants exclusively use the **source** query parameter. It is not technically required, but strongly recommended. The value should indicate where a customer clicked on your Truemed reimbursement link, so it should be different for each instance of the link.

### Common Values

- `email_receipt`
- `email_payment_reminder`
- `order_confirm`
- `reactivate_campaign`

Example:

```
https://app.truemed.com/qualify/[QUALIFICATION_ID]?source=yyyyyy
```

## User ID

For merchants who want more deterministic user-attribution, we accept an optional **user_id** query parameter. 

### Common Values

- The customer's email address 
- The user's ID, UUID, or obfuscated ID
- The order or checkout ID

Example:

```
https://app.truemed.com/qualify/[QUALIFICATION_ID]?source=yyyyyy&user_id=zzzzzzz
```

## SKU information

**Please reach out to [merchants@truemed.com](mailto:merchants@truemed.com) to enable this feature.**

For merchants with a varied catalog, we offer the ability to tailor the telehealth survey to items purchased by appending the SKUs of the purchased items to the reimbursement URL via the **skus** query parameter. This looks as follows:

### Common Values

- A single SKU
- A comma-separated list of SKUs

Example:

```
https://app.truemed.com/qualify/[QUALIFICATION_ID]?skus=product123,product456,product789
```

## Notes

- Make sure any values used are url-encoded so that it's a valid query parameter.
- If provided, we will store the source and user_id and reflect it back in the Truemed dashboard and the .csv reports downloaded from the Truemed dashboard.
- For legacy purposes, we also accept the parameter names utm and utm_source and treat them as source values, but we only officially support source moving forward. We ignore any other UTM parameters.