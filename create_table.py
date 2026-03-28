import sqlite3

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Create the missing fellowship_dashboardcontent table
create_table_sql = """
CREATE TABLE fellowship_dashboardcontent (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    body TEXT NOT NULL,
    image VARCHAR(100) NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    author_id BIGINT NOT NULL REFERENCES fellowship_user(id) DEFERRABLE INITIALLY DEFERRED
);
"""

try:
    cursor.execute(create_table_sql)
    conn.commit()
    print("✓ fellowship_dashboardcontent table created successfully!")
except Exception as e:
    print(f"✗ Error creating table: {e}")

# Verify table creation
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='fellowship_dashboardcontent';")
result = cursor.fetchone()
print(f"Table exists: {result is not None}")

conn.close()