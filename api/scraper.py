from bs4 import BeautifulSoup
import requests
import json

class forecastsObjectList:

    page = requests.get('https://fxssi.com/forecasts/')
    soup = BeautifulSoup(page.content, 'html.parser', multi_valued_attributes=None)
    forecastDivs = soup.findAll("div", {"class": "forecast-list-row value"})

    def __init__(self):
        pass

    def miniDictCreate(self, forecastDiv):
        miniDict = {'date': '',
                   'symbol': '',
                   'status': '',
                   'direction': ''
                   }

        miniDict['date'] = forecastDiv.find("div", {"class":'list-column column-period'}).text.strip()
        miniDict['symbol'] = str(forecastDiv.find("div", {"class": "list-column column-pair"}).find('a'))
        miniDict['status'] = forecastDiv.find("div", {
            "class": ['list-column column-status expired', 'list-column column-status profit',
                      'list-column column-status loss', 'list-column column-status none']}).text.strip()
        miniDict['direction'] = forecastDiv.find("div", {
            "class": ['list-column column-direction sell', 'list-column column-direction buy']}).text.strip()

        return miniDict


    def bigDictCreate(self):

        dictList = []

        for i in range(len(self.forecastDivs)):

            tempDict = self.miniDictCreate(self.forecastDivs[i])
            dictList.append(tempDict)

        jsonObject = json.dumps(dictList)
        return jsonObject
        # return dictList


if __name__ == '__main__':
    scraper = forecastsObjectList()
    temp = scraper.bigDictCreate()
    print(temp)
