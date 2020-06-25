from bs4 import BeautifulSoup
import requests
import json

class activeDetailsObject():

    def __init__(self):
        pass


    def activeDictCreate(self, url):

        # using beautiful soup to retrieve the orders from the html

        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser', multi_valued_attributes=None)
        orderDivs = soup.findAll("div", {"class": "price-chart stage-market result-none"})

        # instantiating the dictionary we'll return

        miniDict = {'entry': '',
                    'stoploss': '',
                    'target1': '',
                    'target2': '',
                    'image': '',
                    'comments': '',
                    'progress': ''
                    }
        
        # adding entry, stoploss and target 1 to the dictioanry

        miniDict['entry'] = orderDivs[0].find("div", {"class": 'price-line entry'}).find("div", {
            "class": 'value'}).text.strip()
       
        miniDict['stoploss'] = orderDivs[0].find("div", {"class": 'price-line stoploss'}).find("div", {
            "class": 'value'}).text.strip()
       
        miniDict['target1'] = orderDivs[0].find("div", {"class": 'price-line target1'}).find("div", {
            "class": 'value'}).text.strip()
       
        miniDict['image'] = soup.find("img", {"class": 'img-responsive'}).get('src')
      
        miniDict['comments'] = str(soup.find("ol", {"class": 'comments'}))
       
        miniDict['progress'] = (soup.find("div", {"class": 'progress'}).get('style'))[7:-1]

        # some orders only have one target, so we'll avoid an error by checking if target2 is None type
        # doing the first part of the operation..
        
        tempVar = orderDivs[0].find("div", {"class": 'price-line target2'})

        # checking if None, and adding values if necesarry

        if tempVar != None:
            miniDict['target2'] = tempVar.find("div", {
            "class": 'value'}).text.strip()

        # dumping the dictioanry to json and returning
        jsonObject = json.dumps(miniDict)
        return jsonObject

# test that runs only on explicit execution of this script

if __name__ == '__main__':
    scraper = activeDetailsObject()
    activeObject = scraper.activeDictCreate('https://fxssi.com/eurjpy-daily-forecast-for-18-jun-2020')


