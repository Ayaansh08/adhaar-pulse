"""
Split large database file into smaller chunks for GitHub upload.
Chunks are combined automatically on app startup.
"""

import os
import sys

CHUNK_SIZE = 95 * 1024 * 1024  # 95MB per chunk (safely under 100MB limit)
DB_FILE = "aadhaar_pulse.db"
CHUNK_DIR = "db_chunks"

def split_database():
    """Split database into chunks"""
    if not os.path.exists(DB_FILE):
        print(f"❌ {DB_FILE} not found!")
        return False
    
    file_size = os.path.getsize(DB_FILE)
    print(f"📦 Splitting {DB_FILE} ({file_size / (1024**2):.1f}MB)")
    
    # Create chunk directory
    os.makedirs(CHUNK_DIR, exist_ok=True)
    
    chunk_num = 1
    with open(DB_FILE, 'rb') as f:
        while True:
            chunk_data = f.read(CHUNK_SIZE)
            if not chunk_data:
                break
            
            chunk_file = os.path.join(CHUNK_DIR, f"{DB_FILE}.chunk{chunk_num:02d}")
            with open(chunk_file, 'wb') as chunk_f:
                chunk_f.write(chunk_data)
            
            print(f"  ✓ {chunk_file} ({len(chunk_data) / (1024**2):.1f}MB)")
            chunk_num += 1
    
    print(f"✅ Split into {chunk_num - 1} chunks")
    return True

if __name__ == "__main__":
    split_database()
