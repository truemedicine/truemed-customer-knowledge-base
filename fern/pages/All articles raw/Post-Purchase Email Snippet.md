---
title: "Post-Purchase Email Snippet"---


*These instructions are specific to reimbursement implementations. They are not necessary to support the Truemed payment app.*

**Encourage HSA / FSA reimbursement immediately post-purchase**

These instructions will help you include a link to the HSA / FSA reimbursement qualification in the post-purchase email.

For example, an email might look like this:

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/1c213b38-cb97-495b-aabd-b1d4db3f303c.png)

**Shopify Instructions**

1. Locate your Qualification Link at [app.truemed.com](http://app.truemed.com)

   ![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/cb9b4129-c728-4824-ab04-291e1f9e4bd6.png)

*This is the link that you will copy for the following steps. Make sure to replace “YOUR_QUALIFICATION_LINK” with the link found in step 1.*

2. On your Shopify admin panel, navigate to `Settings` → Notifications → Customer Notifications → Order Confirmations → Click edit code → Paste the following code snippet according to where you'd like it to appear in your email template:

```
{{% assign skus = "" %}}
{{% for line_item in order.line_items %}}
  {{% assign skus = skus | append: line_item.sku %}}
  {{% unless forloop.last %}}
    {{% assign skus = skus | append: "," %}}
  {{% endunless %}}
{{% endfor %}}

This order might be eligible for HSA/FSA reimbursement. Qualify Here

```

On the standard Shopify template it could look something like this:

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/d672c45a-87c8-4d62-847a-e836b8373024.png)You can click Preview to see what the page will look like before saving it. Note: the hyperlinked text will not be clickable in the preview mode. 

**Non-Shopify Instructions**

1. Locate your Qualification Link at [app.truemed.com](http://app.truemed.com)

   ![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/8ca7b60b-97ee-4943-b2d6-67c005e12e24.png)

*This is the link that you will copy for the following steps. Make sure to replace “YOUR_QUALIFICATION_LINK” with the link found in step 1.*

2. Place the following code snippet in your post-purchase email template. Customers have a better experience if you append SKUs to your qualification link according to [this guide](/en/articles/3634049#sku_information). 

```
This order might be eligible for HSA/FSA reimbursement. Qualify here.

```