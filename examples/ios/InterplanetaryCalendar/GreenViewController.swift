//
//  GreenViewController.swift
//  InterplanetaryCalendar
//
//  Created by Venture Stegasaur on 4/14/19.
//  Copyright © 2019 Steve Richey. All rights reserved.
//

import Foundation
import UIKit

class GreenViewController: UIViewController, UITextFieldDelegate {
    @IBOutlet weak var myTextField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()

        myTextField.delegate = self

//        navigationController?.shows
    }

    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
}
