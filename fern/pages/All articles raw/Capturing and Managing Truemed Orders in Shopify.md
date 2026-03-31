### **Who This Affects**

This update **only applies** to Shopify merchants using one of the following **Payment Capture Methods**:

- **Automatically when the entire order is fulfilled**

- **Manually**

> **This does *not* impact Truemed’s “Compliant Capture” flow**, where orders are blocked from being fulfilled or marked as paid until a Letter of Medical Necessity (LMN) is issued.

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/662e5ef9-1b60-4b9f-ba2e-79300c5149cc.png)### **What’s Changing**

With this update, you’ll have more control over when to capture funds—such as aligning capture with fulfillment or inventory confirmation—just like other payment methods available on your store.
***
## **Order Statuses in Your Shopify Dashboard**

Your customer-facing flow remains unchanged. Behind the scenes, the following order statuses will guide your next steps:

### **1. Payment Pending**

- **Initial status** after an order is placed

- Health survey is under review

- **No LMN issued yet**

- **You cannot capture payment at this stage**

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/07d644a6-7b40-4ce4-bd3b-1f3a8704e434.png)### **2. Authorized**

- **LMN has been issued**

- You can now capture payment manually

- **Capture within 5 days** or authorization will expire

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/2e2b216a-39f8-4b52-81df-fcd8489379a1.png)**How to capture payment:**

- Use **bulk capture** from the Orders list

- Or click **“Capture payment”** inside the order

> ⚠️ You can only capture payment **once per order**. Partial captures are not supported.

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/706b94d9-7eec-4e7c-ad83-3196c9be01f6.png)

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/aab17664-8037-49a6-b1a2-508930403ba7.png)
***
### **3. Paid**

- Payment has been successfully captured

- The order is now ready to fulfill

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/76dd05c0-9955-4b4a-91e0-b9f0884bbc28.png)

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/025ccbbe-bb7c-4afa-a9d3-4513e5d6cd11.png)---

### **4. Expired**

- **LMN was rejected**

- Authorization expired

- **Do not fulfill** these orders

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/6dbf785c-2ec9-47dd-b267-8ac28e4be30c.png)## **📊 Order Statuses in Your Truemed Dashboard**

| Status | Meaning |
| --- | --- |
| **Processing** | Health survey is under review |
| **Authorized** | LMN issued – order is eligible for payment capture and fulfillment |
| **Rejected** | LMN rejected – order is cancelled, do not fulfill |
| **Captured** | Payment successfully captured |
***
## **Manual Capture & Shopify Integration Guide**

## **Overview**

This document explains how manual capture works with our Shopify integration, with special focus on the unique aspects of Truemed orders.

## **Understanding Truemed Orders**

Truemed orders differ from standard Shopify orders in several important ways:

- Orders remain in a "Pending" state until a Letter of Medical Necessity (LMN) is issued

- Status updates can be delayed, taking a few hours to transition to "Paid" status

- Standard capture flows may miss these orders due to their unique state transitions

## **Manual Capture Process**

Here's how the manual capture process works with our Shopify integration:

**Manual capture can be confirmed that is enabled in Shopify settings → payments → Payment capture method**

### **1. Order Creation**

When a customer places an order through Truemed:

- The order is created in Shopify

- Payment authorization is obtained but not captured

- The order enters the "Pending" state

### **2. LMN Issuance**

Before processing can continue:

- A Letter of Medical Necessity (LMN) must be issued

- This may involve verification steps with healthcare providers

- The timing of this step varies and is outside the standard Shopify workflow

### **3. Status Transition**

After LMN issuance:

- The order status begins transitioning to "Paid"

- This transition can take several hours

- During this time, the order is not available for capture through standard automation

### **4. Capture Window**

For successful manual capture:

- Automation must check for orders that have transitioned to "Paid" status

- Capture attempts should be repeated to account for delayed status updates

- Fraud score evaluation should happen only after the order reaches "Paid" status

## **Common Issues**

Several issues can occur with manual capture for Truemed orders:

### **Missed Captures**

The most common issue is missed captures, which happen when:

- Capture automation runs too early, before the order transitions to "Paid"

- The automation doesn't include retry logic to check for status changes

- The capture window is too narrow and doesn't account for delays

### **Fraud Detection Timing**

Problems can arise with fraud detection:

- If fraud detection occurs before the order reaches "Paid" status, valid orders may be incorrectly flagged

- Waiting for the correct status before fraud evaluation is crucial

### **IMPORTANT:**

Expired orders cannot be captured after the fact, once our Stripe authorization has expired, we cannot suggest anything but to have the customer reattempt their purchase.

## **Recommended Flow Implementation**

To properly implement manual capture for Truemed orders we recommend creating a unique Shopify flow specific for Truemed order if you would still like to capture orders “automatically” even with manual capture enabled.

[Truemed Capture Flow](https://file.notion.so/f/f/b8fb0fc4-c992-47dd-b1c1-08a966cc8387/a1b6e06e-4ef7-4beb-8eee-62e21d9eccaa/Truemed_Capture_Flow_\(2\).flow?table=block&id=27319734-f245-80b3-8267-d5ad9d59bb51&spaceId=b8fb0fc4-c992-47dd-b1c1-08a966cc8387&expirationTimestamp=1758592800000&signature=6YokaMPiN1p272oeeOJ20xYNnNiWtdjQNGhKp8-K4w4&downloadName=Truemed+Capture+Flow+%282%29.flow)

Attached is an example Shopify flow that can be imported into the flows app to handle this situation.

*Note: All fulfillment flows are unique. While we've attached an example Shopify flow for reference, you should test thoroughly in your specific environment to ensure proper functioning.*

### **Need Help?**

If you have questions or need help adjusting your payment settings, reach out to [merchants@truemed.com](mailto:merchants@truemed.com).
