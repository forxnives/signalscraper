import time
from flask import Flask
from scraper import *
from activescraper import *
from string import Template

app = Flask(__name__)

url_template = Template("https://fxssi.com/${urlUrl}") 



@app.route('/all')
def get_big_json():

    scraper = forecastsObjectList()
    json = scraper.bigDictCreate()

    return json;

# @app.route('/active/euraud-daily-forecast-for-22-jun-2020')
# def get_active_json():

#     scraper = activeDetailsObject()
#     activeObject = scraper.activeDictCreate('https://fxssi.com/euraud-daily-forecast-for-22-jun-2020')
    
#     return activeObject;


@app.route('/active/<url_url>')
def get_active_json(url_url):

    scraper = activeDetailsObject()
    # activeObject = scraper.activeDictCreate("""https://fxssi.com/${url_url}""")



    activeObject = scraper.activeDictCreate(url_template.substitute(urlUrl=url_url))
    
    return activeObject;
