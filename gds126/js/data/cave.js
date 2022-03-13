var x=false;
var caveData ={
	info:{
		layout:[
			[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
			[2,1,1,2,1,1,2,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
			
			
		],
		src:`images/roof.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:128, height:128, startX:1, startY:1}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:131, startY:1}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:261, startY:1}]
			}
			
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			[x,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			[x,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			[x,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
			],
			src:`images/roof.png`,
		},
		states:
		[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:128, height:128, startX:1, startY:1}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:131, startY:1}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:261, startY:1}]
			}
			]
		}

		var caveHitData={
			info:{
				layout:[
					[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
					[2,2,1,2,1,1,2,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,1,x,x,1,x,x,x,x,x,x,1,1,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/roof.png`,
			},
			states:
			[		
				{
					fps:5,
					cycle:false,
					frames:[
						{width:128, height:128, startX:1, startY:1}
					]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:128, height:128, startX:131, startY:1}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:128, height:128, startX:261, startY:1}]
				}
				]
			}