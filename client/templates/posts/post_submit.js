Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

	Meteor.call('postInsert', post, function(error, result){
		//��ʾ������Ϣ���˳�
		if(error)
			return alert(error.reason);
			
		// ��ʾ�������תҳ��
		if (result.postExists)
        alert('This link has already been posted���������Ѿ����ڣ�');	
			
		Router.go('postPage', {_id: result._id});
	});
  }
});