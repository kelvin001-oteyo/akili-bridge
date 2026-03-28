import sqlite3

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Add missing columns to fellowship_fellowshipapplication table
alter_commands = [
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN sampleWork VARCHAR(100) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN phone VARCHAR(20) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN university VARCHAR(255) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN degree VARCHAR(255) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN year VARCHAR(50) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN gpa VARCHAR(10) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN availability VARCHAR(50) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN timezone VARCHAR(50) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN lab1 VARCHAR(255) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN lab2 VARCHAR(255) NULL;",
    "ALTER TABLE fellowship_fellowshipapplication ADD COLUMN portfolio VARCHAR(200) NULL;",
]

for sql in alter_commands:
    try:
        cursor.execute(sql)
        print(f"✓ Added column: {sql.split('ADD COLUMN ')[1].split(' ')[0]}")
    except Exception as e:
        print(f"✗ Error adding column: {e}")

conn.commit()

# Verify columns were added
cursor.execute('PRAGMA table_info(fellowship_fellowshipapplication)')
columns = cursor.fetchall()
print(f"\nTotal columns now: {len(columns)}")
for col in columns:
    print(f"  {col[1]} - {col[2]}")

conn.close()