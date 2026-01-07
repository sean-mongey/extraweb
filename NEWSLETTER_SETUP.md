# Newsletter Subscription Setup Guide

## Overview
The newsletter subscription form sends data directly to a Power Automate webhook, which then writes to a OneDrive Excel file. No backend or email service is required.

## Step 1: Create Power Automate Flow

1. Go to [Power Automate](https://powerautomate.microsoft.com/)
2. Click **"Create"** → **"Instant cloud flow"**
3. Name it: "Newsletter Subscription"
4. Choose trigger: **"When an HTTP request is received"**

## Step 2: Configure HTTP Request Trigger

1. In the trigger, you'll see a JSON schema
2. Use this schema (or let Power Automate generate it automatically):
```json
{
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "preferredTitle": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "company": {
            "type": "string"
        },
        "language": {
            "type": "string"
        },
        "timestamp": {
            "type": "string"
        }
    }
}
```
3. Click **"Save"** - this will generate your webhook URL
4. **Copy the HTTP POST URL** - you'll need this in Step 4

## Step 3: Check for Duplicate Email (Prevent Duplicates)

1. Click **"+ New step"**
2. Search for **"List rows present in a table"** (Excel Online)
3. Sign in to your Microsoft account if prompted
4. Select:
   - **Location**: OneDrive for Business (or your OneDrive)
   - **Document Library**: OneDrive
   - **File**: Select your Excel file (e.g., "Newsletter Subscriptions.xlsx")
   - **Table**: Select your table
5. Add a filter query to check for the email:
   - Click **"Show advanced options"**
   - In **"Filter Query"**, enter: `Email eq '@{triggerBody()?['email']}'`
   - This checks if the email already exists in the table

## Step 4: Add Conditional Logic

1. Click **"+ New step"**
2. Search for **"Condition"** control
3. Configure the condition:
   - **Choose a value**: `length(body('List_rows_present_in_a_table')?['value'])`
   - **Condition**: `is equal to`
   - **Value**: `0`
   - This checks if no rows were found (email doesn't exist)

## Step 5: Add Row to Excel (If Not Duplicate)

1. In the **"Yes"** branch (when email doesn't exist):
   - Click **"+ Add an action"**
   - Search for **"Add a row into a table"** (Excel Online)
   - Sign in if prompted
   - Select the same file and table as Step 3
   - Map the fields (see Step 6 below)

2. In the **"No"** branch (when email exists - duplicate):
   - Click **"+ Add an action"**
   - Search for **"Respond to a PowerApp or flow"**
   - Set **Status Code**: `409` (Conflict)
   - Set **Body**: 
   ```json
   {
     "success": false,
     "message": "Email already subscribed",
     "duplicate": true
   }
   ```

## Step 6: Map Form Fields to Excel Columns

In the "Add a row into a table" action, map the dynamic content:

- **First Name** → `firstName` (from trigger body)
- **Last Name** → `lastName` (from trigger body)
- **Email** → `email` (from trigger body)
- **Preferred Title** → `preferredTitle` (from trigger body) - e.g., "Mr", "Mrs", "Dr", or custom if "other" selected
- **Phone** → `phone` (from trigger body)
- **Company** → `company` (from trigger body)
- **Language** → `language` (from trigger body) - e.g., "en", "de", "fr"
- **Timestamp** → `timestamp` (from trigger body) - optional but recommended

## Step 7: Add Success Response

1. After the "Add a row into a table" action, add:
   - **"+ Add an action"** → **"Respond to a PowerApp or flow"**
   - Set **Status Code**: `200` (OK)
   - Set **Body**:
   ```json
   {
     "success": true,
     "message": "Successfully subscribed"
   }
   ```

## Step 8: Configure Environment Variable

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add your Power Automate webhook URL:

```env
NEXT_PUBLIC_POWER_AUTOMATE_WEBHOOK_URL=https://prod-xx.westus.logic.azure.com:443/workflows/xxx/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xxx
```

Replace the URL with your actual webhook URL from Step 2.

## Step 9: Test the Flow

1. In Power Automate, click **"Test"** → **"Manually"** → **"Run flow"**
2. Or test by submitting the form on your website
3. Check your OneDrive Excel file to verify the data was added

## Alternative: Excel-Based Duplicate Prevention

If you prefer to handle duplicates in Excel instead of Power Automate:

### Option A: Data Validation (Prevents Duplicates on Entry)
1. Open your Excel file
2. Select the Email column
3. Go to **Data** → **Data Validation**
4. Choose **Custom** formula
5. Enter: `=COUNTIF(Table1[Email],A2)=1` (adjust table/column names)
6. This will warn users if they try to manually enter a duplicate

### Option B: Conditional Formatting (Highlights Duplicates)
1. Select the Email column
2. Go to **Home** → **Conditional Formatting** → **Highlight Cells Rules** → **Duplicate Values**
3. Choose a format (e.g., red fill)
4. This highlights duplicate emails for easy identification

### Option C: Remove Duplicates Tool
1. Select your data table
2. Go to **Data** → **Remove Duplicates**
3. Select **Email** column
4. Click **OK**
5. Run this periodically to clean up duplicates

**Note**: The Power Automate method (Steps 3-7) is recommended as it prevents duplicates at the source.

## Excel File Setup (Optional)

If you want to create the Excel file with headers first:

1. Create a new Excel file in OneDrive
2. Name it: "Newsletter Subscriptions.xlsx"
3. Create a table with these columns:
   - First Name
   - Last Name
   - Email
   - Preferred Title
   - Phone
   - Company
   - Language
   - Timestamp
4. Format as Table (Home → Format as Table)
5. This ensures Power Automate uses the correct column names

## Troubleshooting

### Form submits but data doesn't appear in Excel
- Check Power Automate flow run history for errors
- Verify the Excel file path and table name are correct
- Ensure you're signed in to the correct Microsoft account

### Webhook URL not working
- Make sure the `.env.local` file is in the project root
- Restart your Next.js dev server after adding the environment variable
- Verify the URL is complete (includes all query parameters)

### CORS errors
- Power Automate webhooks should handle CORS automatically
- If issues persist, check Power Automate flow settings

## Security Notes

- The webhook URL contains a signature - keep it secure
- Don't commit `.env.local` to version control (it's already in `.gitignore`)
- Consider adding rate limiting in Power Automate if needed

## Next Steps

Once set up, the form will:
1. Collect user information
2. Send it to Power Automate via webhook
3. Power Automate automatically adds a row to your OneDrive Excel file
4. No manual steps required!

