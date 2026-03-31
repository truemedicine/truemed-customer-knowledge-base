---
title: "Truemed Dashboard_ Viewing Qualification Details"
---

The Truemed Merchant Dashboard allows you to view details for each customer qualification. These records help you verify which customers have completed the medical qualification process and when related actions occurred.

## Data Included in Dashboard Reporting

From the **Qualifications Dashboard**, merchants can view:

- **Customer Email** – The customer’s contact information, used to identify and verify qualified purchases.
- **Survey Submission Date & Time** – When the customer completed their health survey through Truemed.
- **Provider Review Date & Time** – When a licensed provider reviewed the survey and issued a Letter of Medical Necessity (LMN).
- **Charge Date** – When the merchant was billed for the qualification.
  - *Note: Qualifications are batch-charged weekly on Thursdays.*

## How to View Qualification Details

1. Log in to your [**Truemed Merchant Dashboard**](https://app.truemed.com/).
2. Navigate to the **Qualifications** section.
3. Use the search or filter tools to locate a specific customer or date range.
4. View the customer’s qualification details, including the timestamps for survey submission, provider review, and charge date.
5. If you'd like a specific set of data, select "**Download Report**" and sort by either "customer qualification date" or "charge date". 

---

## Using VLOOKUP to Match Truemed Qualifications to Your Sales Data

If you’ve downloaded your Truemed Qualifications report and want to match those records to your internal sales data, you can use Excel or Google Sheets’ **VLOOKUP** function to match customers by **email address**.

This is the recommended and most reliable way to reconcile Truemed qualification activity with your sales records.

---

## When to Use VLOOKUP

Use VLOOKUP if you want to:

- Confirm whether a customer who made a purchase completed a Truemed medical qualification
- Identify the date a customer submitted their health survey
- See when an LMN was reviewed or when a qualification was charged
- Match Truemed qualification records to your sales data using customer email

---

## What You’ll Need

- A **Truemed Qualifications export** from the Merchant Dashboard
- A **sales or orders export** from your ecommerce platform that includes customer email
- Excel or Google Sheets

---

## How to Match Records by Email

1. Export your Truemed Qualifications report from the Merchant Dashboard.
2. Export your sales or orders report from your ecommerce platform.
3. Open both files in the same Excel or Google Sheets workbook, each as a separate tab.
4. In your sales sheet, add a new column (for example, **Truemed Qualification Status**).
5. In the first cell of that column, enter the following formula:

   ```
=VLOOKUP(B2, Qualifications!A:Z, 4, FALSE)
```

**Example explanation:**

- **B2** = customer email in your sales report
- **Qualifications!A:Z** = the full range of your Truemed Qualifications export
- **4** = the column containing the data you want to return (for example, LMN Reviewed)
- **FALSE** = ensures an exact email match

6. Copy the formula down the column to apply it to all rows
7. Rows with matching emails will return the selected Truemed qualification data

---

## Choosing the Right Column Number

Your Truemed Qualifications export may include columns such as:

- Email
- Survey Submission Date (Created)
- LMN Reviewed
- Paid At

Update the column number in the formula depending on which field you want to return.

> Tip: Column order may vary by export. Always confirm column positions in your downloaded file before selecting a column number.

---

## Common Troubleshooting Tips

- Ensure email addresses match exactly (no extra spaces).
- VLOOKUP searches left to right, so the email column must be first in the selected range.
- To hide errors when no match exists, use:

  ```
=IFERROR(VLOOKUP(B2, Qualifications!A:Z, 4, FALSE), "")
```

---

Need help reconciling qualification records with your sales data?\
Contact [**merchants@truemed.com**](mailto:merchants@truemed.com) and our team will be happy to assist.