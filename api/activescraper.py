from bs4 import BeautifulSoup
import requests
import json

class activeDetailsObject():

    def __init__(self):
        pass


    def activeDictCreate(self, url):

        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser', multi_valued_attributes=None)
        orderDivs = soup.findAll("div", {"class": "price-chart stage-market result-none"})

        miniDict = {'entry': '',
                    'stoploss': '',
                    'target1': '',
                    'target2': '',
                    'image': '',
                    'comments': '',
                    'progress': ''
                    }

        miniDict['entry'] = orderDivs[0].find("div", {"class": 'price-line entry'}).find("div", {
            "class": 'value'}).text.strip()
        miniDict['stoploss'] = orderDivs[0].find("div", {"class": 'price-line stoploss'}).find("div", {
            "class": 'value'}).text.strip()
        miniDict['target1'] = orderDivs[0].find("div", {"class": 'price-line target1'}).find("div", {
            "class": 'value'}).text.strip()
        miniDict['target2'] = orderDivs[0].find("div", {"class": 'price-line target2'}).find("div", {
            "class": 'value'}).text.strip()
        miniDict['image'] = soup.find("img", {"class": 'img-responsive'}).get('src')
        miniDict['comments'] = str(soup.find("ol", {"class": 'comments'}))
        miniDict['progress'] = (soup.find("div", {"class": 'progress'}).get('style'))[7:-1]

        jsonObject = json.dumps(miniDict)
        return jsonObject

if __name__ == '__main__':
    scraper = activeDetailsObject()
    activeObject = scraper.activeDictCreate('https://fxssi.com/eurjpy-daily-forecast-for-18-jun-2020')


