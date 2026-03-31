---
title: "Order Confirmation Widget"
---

*These instructions are specific to reimbursement implementations. They are not necessary to support the Truemed payment app.*

### **Encourage HSA / FSA reimbursement immediately post-purchase**

These instructions will help you include a link to qualification for HSA / FSA reimbursement on the post-purchase page of your online store.

For example, on a Shopify store, that looks like this:

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/eb0a9f71-5c88-409b-a517-44a5f8166a7b.png)

Truemed provides a custom widget to make this very simple for Shopify stores, but we also provide generic instructions below.

### **Shopify Instructions**

1. Locate your Qualification Link at [app.truemed.com](http://app.truemed.com)

   ![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/92a29f53-7544-447d-89ae-2ec7f6ba1e81.png)


2) On your Shopify admin panel, navigate to `Settings` → `Checkout` → `Additional Scripts`

3) Paste the following into the box for `Order status page` (remember to replace `YOUR_QUALIFICATION_LINK` with the link found in Step 1):

   ```

<script src="https://truemed-public.s3.us-west-1.amazonaws.com/truemed-ads/confirmation-widget-v1.1.min.js"></script>
```

### **Non-Shopify Instructions**

It's also easy to add this CTA on any store:

1. Locate Your Qualification Link (same instructions as Step 1 above)

2. On your post-purchase page, add a CTA with the following code:

   ```
This order might be eligible for HSA/FSA reimbursement. Get Reimbursed.
```