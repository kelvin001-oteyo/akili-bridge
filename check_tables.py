import sqlite3

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Check fellowship tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'fellowship_%';")
tables = cursor.fetchall()
print('Fellowship tables found:', tables)

# Check if dashboardcontent table exists
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='fellowship_dashboardcontent';")
dashboard_table = cursor.fetchone()
print('DashboardContent table exists:', dashboard_table is not None)

conn.close()