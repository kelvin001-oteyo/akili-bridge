import sqlite3

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Update is_admin, is_staff, is_superuser for kelvin user
cursor.execute("UPDATE fellowship_user SET is_admin = 1, is_staff = 1, is_superuser = 1 WHERE username = 'kelvin'")
affected = cursor.rowcount
conn.commit()

# Verify the update
cursor.execute("SELECT username, is_admin, is_staff, is_superuser FROM fellowship_user WHERE username = 'kelvin'")
result = cursor.fetchone()
conn.close()

if affected > 0 and result:
    print("✓ User 'kelvin' has been set as admin!")
    print(f"  - Username: {result[0]}")
    print(f"  - is_admin: {bool(result[1])}")
    print(f"  - is_staff: {bool(result[2])}")
    print(f"  - is_superuser: {bool(result[3])}")
else:
    print("✗ User 'kelvin' not found or update failed")
