
chrome.commands.onCommand.addListener(function(command) {

	if (command === 'Proximo') {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

		
			var activeTab = tabs[0];

			const url = activeTab.url;
			const id = url.split('/questoes/')[1].split('/')[0]
			var complemento = ''
			if (url.split('/questoes/')[1].split('/')[1]) complemento = url.split('/questoes/')[1].split('/')[1];
			const novaurl = `${url.split('/questoes/')[0]}/questoes/${parseInt(id)+1}/${complemento}`
			chrome.tabs.update(activeTab.id, {url: novaurl});
	   
		 });
	}
	else if (command === 'Anterior'){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

		
			var activeTab = tabs[0];

			const url = activeTab.url;
			const id = url.split('/questoes/')[1].split('/')[0]
			var complemento = ''
			if (url.split('/questoes/')[1].split('/')[1]) complemento = url.split('/questoes/')[1].split('/')[1];
			const novaurl = `${url.split('/questoes/')[0]}/questoes/${parseInt(id)-1}/${complemento}`
			chrome.tabs.update(activeTab.id, {url: novaurl});
	   
		 });
	}
  });
