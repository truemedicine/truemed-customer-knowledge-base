---
title: "Product Page Widget 2"
---

### **Overview**

This widget educates customers about HSA/FSA eligibility, and indicates that they might qualify for HSA/FSA spending or reimbursement with their purchase.

It should be installed on your product pages, typically near the price or "Add to Cart" button

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/76fa2c84-73b1-4693-802c-357684378195.png)

*Your widget may look different - we are always working on improvements with the goal of increasing conversion.*

### **Installation**

1. Reach out to [merchants@truemed.com](mailto:merchants@truemed.com) if you do not know your Public Qualification ID

2. In Shopify, open the template where you’d like to add the widget. In the left-hand editor, select the section where you want the widget to appear, then click “Add block” to insert it.

![](https://cdn.applied.guide/media/886214b8-01bd-4c9d-8591-1d6ccbcc8c0e/c70d0879-7e09-4bfe-bfa1-b6e303f68507.png)1. Click **“Add block”**, then insert these 2 lines of HTML on your site, typically near the "Buy" or "Add to Cart" buttons (make sure to replace `YOUR_PUBLIC_QUALIFICATION_ID` with the ID found in Step 1):

   ```

<script src="https://static.truemed.com/widgets/product-page-widget.min.js" defer></script>
```

2. Adjust styles on the div to fit your page! For instance, on the Komuso site pictured above, they used the following to the `style` property on the div from line 1 above:

   ```
style="font-size: 16px; margin-top: 7px; margin-bottom: 10px; font-family: Poppins, sans-serif;"
```

### **For Dark Backgrounds**

For pages with black or dark backgrounds, add the attribute `dark-mode` to enable a white Truemed logo. Update the text color within the `style` property:

```

<script src="https://static.truemed.com/widgets/product-page-widget.min.js" defer></script>
```

### **For Shopify Stores: Only Display on Certain Products**

> 💡To enable this feature, start by tagging your products in your Shopify dashboard. Shopify Tag Docs
>
> Choose `truemed-eligible` if your store sells fewer *eligible* products than *ineligible*.
>
> Otherwise choose `truemed-ineligible`. This is a great option if you have many *eligible* products but also sell gift cards or branded merch.

To only display the widget for products *with* the tag `'truemed-eligible'`:

```

<script src="https://static.truemed.com/widgets/product-page-widget.min.js" defer></script>
```

To only display the widget for products *without* the tag `'truemed-ineligible'`:

```

<script src="https://static.truemed.com/widgets/product-page-widget.min.js" defer></script>
```

That's it! Reach out with any technical questions to [merchants@truemed.com](mailto:merchants@truemed.com).

### **More Customizations You May Need:**

1. Changing the color of the **Learn how** link:

   ```
<style>
.truemed-instructions-open {{
    color: #7a7a7a !important;
  }}
</style>
```

2. Keep the Truemed logo from oversizing:

   ```
<style>
  .truemed-logo-img {{
    height: 13px !important;
  }}
</style>
```

3. Keep the Truemed logo in-line with the text:

   ```
<style>
.truemed-logo-img {{
    margin: 2px 0 0 3px !important;
  }}
</style>
```

4. Add space above or below the widget:

   1. Add margin-top: #px; to the style tags to add space to the top or margin-bottom: #px; to add space below the widget

### **FAQs:**

a) Does this work for Shopify templates?

- Yes!

  - From the Shopify admin panel, navigate to `Online Store` -&gt; `Themes` -&gt; `Actions` -&gt; `Edit Code`, and look for your product template (usually called something like `main-product.liquid`).

  - Or, send this page (along with your Public Qualification ID) to your Shopify developers.

- Does this widget work for both Payment and Reimbursement integrations?

  - Yes! Based on your Public Qualification ID, we'll load the product page (PDP) widget custom-tailored to your merchant profile.