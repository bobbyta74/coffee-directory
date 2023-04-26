import csv
import sqlite3

connection = sqlite3.connect("starbucks.db")
cursor = connection.cursor()

cursor.execute("DROP TABLE IF EXISTS drinks;")

cursor.execute("""
    CREATE TABLE drinks(
        category text,
        beverage text,
        customisation text,
        size text,
        calories interger);
    """)
with open("starbucks.csv") as csv_file:
    csv_reader = csv.reader(csv_file)
    headings = next(csv_reader)
    for row in csv_reader:
        cursor.execute("""
            INSERT INTO drinks VALUES(?,?,?,?,?)
        """, row)
connection.commit()
cursor.close()
connection.close()