"""
Automatically combine database chunks on startup.
This runs before the app starts.
"""

import os
import glob

CHUNK_DIR = "db_chunks"
DB_FILE = "aadhaar_pulse.db"

def combine_chunks():
    """Combine database chunks back into full file"""
    
    # Check if chunks exist
    chunk_files = sorted(glob.glob(os.path.join(CHUNK_DIR, f"{DB_FILE}.chunk*")))
    
    if not chunk_files:
        if os.path.exists(DB_FILE):
            print(f"✅ {DB_FILE} already exists")
        else:
            print(f"⚠️  No chunks or database found")
        return True
    
    # If full DB already exists, skip
    if os.path.exists(DB_FILE):
        print(f"✅ {DB_FILE} already combined")
        return True
    
    print(f"🔄 Combining {len(chunk_files)} chunks into {DB_FILE}...")
    
    try:
        with open(DB_FILE, 'wb') as output_file:
            for chunk_file in chunk_files:
                print(f"  Reading {os.path.basename(chunk_file)}")
                with open(chunk_file, 'rb') as chunk_f:
                    output_file.write(chunk_f.read())
        
        combined_size = os.path.getsize(DB_FILE)
        print(f"✅ Database reconstructed ({combined_size / (1024**2):.1f}MB)")
        return True
        
    except Exception as e:
        print(f"❌ Error combining chunks: {e}")
        return False

if __name__ == "__main__":
    combine_chunks()
