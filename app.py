# import time
# import subprocess

# def get_playerctl_info():
#     try:
#         # Get current playing media details
#         title = subprocess.check_output(["playerctl", "metadata", "title"], text=True).strip()
#         artist = subprocess.check_output(["playerctl", "metadata", "artist"], text=True).strip()
#         return f"Title: {title}\nArtist: {artist}"
#     except subprocess.CalledProcessError:
#         return "No media playing"

# def update_text_file():
#     while True:
#         data = get_playerctl_info()
#         with open("data.txt", "w") as file:
#             file.write(data)
#         time.sleep(10)  # Update every second

# if __name__ == "__main__":
#     update_text_file()
