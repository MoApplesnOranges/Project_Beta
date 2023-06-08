import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            url = "http://inventory-api:8000/api/automobiles/"
            # url = 'http://project-beta-inventory-api-1:8000/api/automobiles/'
            response = requests.get(url)
            content = json.loads(response.content)

            print("Content: ", content)

            for automobile in content['autos']:
                AutomobileVO.objects.update_or_create(
                    # href=automobile['href'],
                    vin=automobile["vin"],
                    defaults={
                        "sold": automobile["sold"],
                        # "vin": automobile["vin"]
                        },
                )
        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
