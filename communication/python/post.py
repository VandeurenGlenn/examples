import requests
import json

headers = {'content-type': 'application/json'}
url = 'https://open-address.herokuapp.com/create/5000'

data = {"eventType": "someEventName", "data": {"uid": "some-uid", "name": "someName"}}

requests.post(url, data=json.dumps(data), headers=headers)
